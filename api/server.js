require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
// const knex = require('knex');
// const knexConfig = require('../knexfile');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const secret = process.env.JWT_SECRET;
// const { restricted } = require('../data/middleware/middleware');
// const { generateToken } = require('../data/helpers/helpers');

const usersRoute = require('../data/routes/usersRoutes');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// server.use('/apiUrl', requiredRoute)
server.use('/users', usersRoute);

server.get('/', (req, res) => {
	res.send('Sanity Check');
});

module.exports = server;
