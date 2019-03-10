const express = require('express');
const bcrypt = require('bcryptjs');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

const { generateToken } = require('../helpers/helpers');
const router = express.Router();

router.post('/register', async (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 8);
	user.password = hash;
	if (user.type === 'user') {
		if (user.email && user.password) {
			try {
				const newUser = {
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					password: user.password
				};
				console.log(newUser);
				const result = await db('users').insert(newUser);
				res.status(201).json({ message: 'Successfully created user', result });
			} catch (error) {
				res.status(400).json({ message: 'unable to process', error });
			}
		} else {
			res.status(404).json({
				message: 'Make sure email & password are included'
			});
		}
	} else if (user.type === 'company') {
		if (user.email && user.password) {
			try {
				const newCompany = {
					name: user.name,
					email: user.email,
					password: user.password
				};

				const result = await db('companies').insert(newCompany);
				res
					.status(201)
					.json({ message: 'Successfully created company', result });
			} catch {
				res.status(400).json({ message: 'unable to process' });
			}
		} else {
			res.status(404).json({
				message: 'Make sure email & password are included'
			});
		}
	} else {
		res.status(500);
	}
});

router.post('/login', async (req, res) => {
	let { email, password, type } = req.body;

	if (type === 'user') {
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
	} else if (type === 'company') {
		const user = await db('companies')
			.where('email', email)
			.first();
		if (user && bcrypt.compareSync(password, user.password)) {
			try {
				const token = generateToken(user);
				const companyInfo = {
					id: user.id,
					name: user.name,
					email: user.email,
					bio: user.bio,
					address: user.address
				};

				res.status(200).json({ token, companyInfo });
			} catch {
				res.status(404).json({ message: 'unable to find that company' });
			}
		} else {
			res.status(500).json({ message: 'login server issue' });
		}
	}
});

module.exports = router;
