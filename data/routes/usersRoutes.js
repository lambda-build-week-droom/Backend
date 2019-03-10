const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

const { restricted } = require('../middleware/middleware');
const router = express.Router();

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
