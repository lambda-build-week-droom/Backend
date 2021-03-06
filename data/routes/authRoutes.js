const express = require('express');
const bcrypt = require('bcryptjs');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

const { generateToken } = require('../helpers/helpers');
const { emailCheck } = require('../middleware/middleware');
const router = express.Router();

router.post('/register', emailCheck, async (req, res) => {
	// eamil, password, type =  required
	// firstName, lastname, occupation, expereience, interests, userImg = optional for user
	// name, bio, address, companyImg
	if (!req.body.type) {
		res.send(500);
	}
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 8);
	user.password = hash;
	if (user.type === 'user') {
		if (user.email && user.password) {
			try {
				const newUser = {
					email: user.email,
					password: user.password,
				};
				const result = await db('users').insert(newUser, 'id');
				res.status(201).json({ message: 'Successfully created user account', result });
			} catch (error) {
				res.status(500).json({ message: 'Error processing the request' });
			}
		} else {
			res.status(404).json({
				message: 'Make sure email & password are included',
			});
		}
	} else if (user.type === 'company') {
		if (user.email && user.password) {
			try {
				const newCompany = {
					companyName: user.companyName,
					email: user.email,
					password: user.password,
				};
				const result = await db('companies').insert(newCompany, 'id');
				res.status(201).json({ message: 'Successfully created company', result });
			} catch (error) {
				res.status(500).json({ message: 'Error processing the request' });
			}
		} else {
			res.status(404).json({
				message: 'Make sure email & password are included',
			});
		}
	} else {
		res.status(500);
	}
});

router.post('/login', async (req, res) => {
	let { email, password } = req.body;
	const user = await db('users')
		.where('email', email)
		.first();
	const company = await db('companies')
		.where('email', email)
		.first();
	if (user && bcrypt.compareSync(password, user.password)) {
		try {
			const token = await generateToken(user);
			const userInfo = {
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				occupation: user.occupation,
				experience: user.experience,
				interests: user.interests,
				userImg: user.userImg,
			};

			res.status(200).json({ token, userInfo });
		} catch (error) {
			res.status(500).json({ message: 'login server issue' });
		}
	} else if (company && bcrypt.compareSync(password, company.password)) {
		try {
			const token = generateToken(company);
			const companyInfo = {
				id: company.id,
				companyName: company.companyName,
				bio: company.bio,
				address: company.address,
				companyImg: company.companyImg,
			};

			res.status(200).json({ token, companyInfo });
		} catch (error) {
			res.status(500).json({ message: 'login server issue' });
		}
	} else {
		res.status(404).json({ message: 'That email address does not exist' });
	}
});

module.exports = router;
