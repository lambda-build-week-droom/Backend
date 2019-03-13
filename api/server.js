require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const usersRoute = require('../data/routes/usersRoutes');
const authRoute = require('../data/routes/authRoutes');
const companyRoute = require('../data/routes/companyRoutes');
const jobRoute = require('../data/routes/jobsRoutes');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// server.use('/apiUrl', requiredRoute)
server.use('/auth', authRoute);
server.use('/users', usersRoute);
server.use('/companies', companyRoute);
server.use('/jobs', jobRoute);

server.get('/', (req, res) => {
	res.send('Sanity Check PG');
});

server.use(function(req, res) {
	res.status(404).json({
		message: 'Invalid endpoint!',
	});
});

module.exports = server;
