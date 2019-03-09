require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const knex = require('knex');
const knexConfig = require('../knexfile');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const secret = process.env.JWT_SECRET;
const { restricted } = require('../data/middleware/middleware');
const { generateToken } = require('../data/helpers/helpers');

const server = express();
const db = knex(knexConfig.development);

// const db = require('./db.js');

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// ================================ add routes here

server.get('/', (req, res) => {
	res.send('Sanity Check');
});

server.post('/api/register', async (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 8);
	user.password = hash;
	if (user.email && user.password) {
		try {
			const result = await db('users').insert(user);
			res.status(201).json({ message: 'Successfully created user', result });
		} catch {
			res.status(400).json({ message: 'unable to process' });
		}
	} else {
		res.status(404).json({
			message: 'Make sure username & password are included'
		});
	}
});

server.post('/api/login', async (req, res) => {
	let { email, password } = req.body;

	const user = await db('users')
		.where('email', email)
		.first();
	if (user && bcrypt.compareSync(password, user.password)) {
		try {
			const token = generateToken(user);
			res.status(200).json({ message: `Welcome ${user.firstName}!`, token });
		} catch {
			res.status(404).json({ message: 'unable to find that user' });
		}
	} else {
		res.status(500).json({ message: 'login server issue' });
	}
});

server.get('/api/users', restricted, async (req, res) => {
	try {
		const users = await db('users').select(
			'firstName',
			'lastName',
			'occupation'
		);
		res.status(200).json(users);
	} catch {
		res.status(500).json({ message: 'Unexpected error' });
	}
});

module.exports = server;
