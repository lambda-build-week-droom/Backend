const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

const { restricted } = require('../middleware/middleware');
const router = express.Router();

//Get All Users
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

//Get User By Id
router.get('/info', restricted, async (req, res) => {});

// Get User Info
router.get('/:id', restricted, async (req, res) => {});

//Update User
router.get('/update', restricted, async (req, res) => {});

//Delete User
router.get('/delete', restricted, async (req, res) => {});

module.exports = router;
