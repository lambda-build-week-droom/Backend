const express = require('express');
// const knex = require('knex');
// const knexConfig = require('../../knexfile');
// const db = knex(knexConfig.development);

const userHelper = require('../helpers/userHelper');

const { restricted, imageProcess } = require('../middleware/middleware');
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
	try {
		const result = await userHelper.getUserInfo(req.decodedToken);
		// const saves = await userHelper.getSaves(result.id);

		res.status(200).json(result);
	} catch (err) {
		res.status(500).json('server error');
	}
});

router.get('/matched', restricted, async (req, res) => {
	try {
		const result = await userHelper.match(req.decodedToken.subject);
		res.status(200).json(result);
	} catch {
		res.status(500).json({ message: 'Internal server error' });
	}
});

// Get User by ID
router.get('/:id', restricted, async (req, res) => {
	const { id } = req.params;
	const result = await userHelper.getUserById(id);
	res.status(200).json(result);
});

//Update User
router.put('/update', restricted, imageProcess, async (req, res) => {
	console.log(req.decodedToken);
	const updateInfo = req.body;
	const result = await userHelper.updateUser(req.decodedToken, updateInfo);
	res.status(200).json(result); // returns a 1 if updated
});

router.post('/:id/save', restricted, async (req, res) => {
	try {
		const { id } = req.params;
		const result = await userHelper.saveUser(req.decodedToken.subject, id);
		res.status(201).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});
router.post('/:id/remove', restricted, async (req, res) => {
	const { id } = req.params;
	const result = await userHelper.removeUser(req.decodedToken.subject, id);
	res.status(201).json(result);
});

//Delete User
// router.delete('/delete', restricted, async (req, res) => {
// 	const result = await userHelper.deleteUser(req.decodedToken);
// 	res.status(204).json(result);
// });

module.exports = router;
