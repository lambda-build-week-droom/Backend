const express = require('express');
// const knex = require('knex');
// const knexConfig = require('../../knexfile');
// const db = knex(knexConfig.development);

const jobsHelper = require('../helpers/jobsHelper');

const { restricted } = require('../middleware/middleware');
const router = express.Router();

//Get All Users
router.get('/', restricted, async (req, res) => {
	try {
		const result = await jobsHelper.getAllJobs();
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

// Get User by ID
router.get('/:id', restricted, async (req, res) => {
	const { id } = req.params;
	const result = await userHelper.getUserById(id);
	res.status(200).json(result);
});

//Update User
router.put('/update', restricted, async (req, res) => {
	console.log(req.decodedToken);
	const updateInfo = req.body;
	const result = await userHelper.updateUser(req.decodedToken, updateInfo);
	res.status(200).json(result); // returns a 1 if updated
});

//Delete User
// router.delete('/delete', restricted, async (req, res) => {
// 	const result = await userHelper.deleteUser(req.decodedToken);
// 	res.status(204).json(result);
// });

module.exports = router;