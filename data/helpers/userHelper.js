const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	// registerUser,
	// loginUser,
	getUserInfo,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
};

// function registerUser(user) {
// 	user.userRole = user.userRole.toLowerCase();
// 	return db('users').insert(user);
// }

// function loginUser(user) {
// 	return db('users')
// 		.where({ username: user.userName })
// 		.first();
// }

function getAllUsers() {
	return db('users').select(
		'id',
		'firstName',
		'lastName',
		'occupation',
		'experience',
		'interests'
	);
}

function getUserInfo(user) {
	return db('users')
		.where('email', user.email)
		.select('id', 'firstName', 'lastName', 'occupation', 'experience', 'interests');
}
function getUserById(id) {
	return db('users')
		.where('id', id)
		.select('id', 'firstName', 'lastName', 'occupation', 'experience', 'interests')
		.first();
}

function updateUser(user, updateInfo) {
	return db('users')
		.where('id', user.id)
		.update(updateInfo);
}

function deleteUser(user) {
	const userDelete = db('users')
		.where({ username: user.username })
		.del();

	const donationDelete = db('donationsNeeded')
		.where({ userId: user.id })
		.del();

	return Promise.all([userDelete, donationDelete]).then(res => {
		console.log(res);
		return res[0];
	});
}