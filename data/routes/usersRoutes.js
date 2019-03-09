const express = require('express');
const bcrypt = require('bcryptjs');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

const { generateToken } = require('../helpers/helpers');
const { restricted } = require('../middleware/middleware');
const router = express.Router();

router.post('/register', async (req, res) => {
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

router.post('/login', async (req, res) => {
	let { email, password } = req.body;

	const user = await db('users')
		.where('email', email)
		.first();
	if (user && bcrypt.compareSync(password, user.password)) {
		try {
			const token = generateToken(user);
			const userInfo = {
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				occupation: user.occupation,
				experience: user.experience,
				interests: user.interests
			};

			res.status(200).json({ token, userInfo });
		} catch {
			res.status(404).json({ message: 'unable to find that user' });
		}
	} else {
		res.status(500).json({ message: 'login server issue' });
	}
});

router.get('/', restricted, async (req, res) => {
	try {
		const users = await db('users').select(
			'id',
			'firstName',
			'lastName',
			'occupation',
			'experience',
			'interests'
		);
		res.status(200).json(users);
	} catch {
		res.status(500).json({ message: 'Unexpected error' });
	}
});

module.exports = router;
