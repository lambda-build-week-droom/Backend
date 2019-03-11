const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	getUserInfo,
	getAllUsers,
	getUserById,
	updateUser,
	// deleteUser,
};

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
		.select('id', 'firstName', 'lastName', 'occupation', 'experience', 'interests')
		.first();
}
function getUserById(id) {
	return db('users')
		.where('id', id)
		.select('id', 'firstName', 'lastName', 'occupation', 'experience', 'interests')
		.first();
}

function updateUser(user, updateInfo) {
	return db('users')
		.where('email', user.email)
		.update(updateInfo);
}

// function deleteUser(user) {
// 	console.log('delete', user.email);
// 	const userDelete = db('users')
// 		.where('email', user.email)
// 		.del();
// 	return user.email;
// }
