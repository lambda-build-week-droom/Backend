const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	getAllUsers,
	getSaves,
	getUserInfo,
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
		'interests',
		'saveUser',
		'removeUser'
	);
}

function getSaves(id) {
	return db('userJobSaves').where('user_id', id);
}

async function getUserInfo(user) {
	const likes = await db('userJobSaves')
		.join('jobPosting', 'userJobSaves.job_id', 'jobPosting.id')
		.where('user_id', user.subject)
		.select(
			'job_id',
			'jobTitle',
			'jobPosition',
			'jobDescription',
			'jobRequirements',
			'jobSalary',
			'jobTags',
			'jobOpenDate',
			'jobCloseDate'
		);
	console.log(likes);
	const userInfo = await db('users')
		.where('id', user.subject)
		.select('id', 'firstName', 'lastName', 'occupation', 'experience', 'interests')
		.first();
	Object.assign(userInfo, { saved: likes });
	return userInfo;
}

// function getUserInfo(user) {
// 	return db('users')
// 		.where('email', user.email)
// 		.select('id', 'firstName', 'lastName', 'occupation', 'experience', 'interests')
// 		.first();
// }
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

function saveUser(companyId, userId) {
	return db('companyUserSaves').insert({ company_id: companyId, user_id: userId });
}
function removeUser(companyId, userId) {
	return db('companyUserSaves')
		.where({ company_id: companyId, user_id: userId })
		.del();
}
