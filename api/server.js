require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const usersRoute = require('../data/routes/usersRoutes');
const authRoute = require('../data/routes/authRoutes');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// server.use('/apiUrl', requiredRoute)
server.use('/users', usersRoute);
server.use('/auth', authRoute);

server.get('/', (req, res) => {
	res.send('Sanity Check');
});

module.exports = server;
