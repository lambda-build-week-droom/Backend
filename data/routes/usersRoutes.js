const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

const userHelper = require('../helpers/userHelper');

const { restricted } = require('../middleware/middleware');
const router = express.Router();

//Get All Users
router.get('/', restricted, async (req, res) => {
	try {
		const result = await userHelper.getAllUsers();
		res.status(200).json(result);
	} catch {
		res.status(500).json({ message: 'Internal server error' });
	}
});

//Get logged in user
router.get('/info', restricted, async (req, res) => {
	const result = await userHelper.getUserInfo(req.decodedToken);
	res.status(200).json(result);
});

// Get User Info
router.get('/:id', restricted, async (req, res) => {});

//Update User
router.get('/update', restricted, async (req, res) => {});

//Delete User
router.get('/delete', restricted, async (req, res) => {});

module.exports = router;
