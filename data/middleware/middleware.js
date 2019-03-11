const jwt = require('jsonwebtoken');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

function restricted(req, res, next) {
	const token = req.headers.authorization;
	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Invalid token' });
			} else {
				next();
			}
		});
	} else {
		res.status(500).json({ message: 'Sever error. Please try again' });
	}
}

async function emailCheck(req, res, next) {
	const user = req.body;
	const userAccount = await db('users').where('email', user.email);
	const companyAccount = await db('companies').where('email', user.email);
	if (userAccount || companyAccount) {
		res.status(400).json({ message: 'Email account alredy in use' });
	} else {
		next();
	}
}
module.exports = {
	restricted,
	emailCheck,
};
