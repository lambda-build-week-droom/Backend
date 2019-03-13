const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	getAllUsers,
	getSaves,
	getUserInfo,
	getUserById,
	updateUser,
	saveUser,
	removeUser,
	match,
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

// select u.user_id,c.user_id,u.company_id,c.company_id, com.companyName, com.id, u.job_id
// from userJobSaves u
//  left join companyUserSaves c
//      on u.company_id = c.company_id
//      left join companies com
//          on c.company_id = com.id
//  where u.user_id = c.user_id

async function match(userId) {
	console.log(userId);
	try {
		const userMatches = db('userJobSaves')
			.select(
				'userJobSaves.user_id',
				'userJobSaves.company_id',
				'companies.companyName',
				'userJobSaves.job_id'
			)
			.leftJoin('companyUserSaves', 'userJobSaves.company_id', companyUserSaves.company_id)
			.leftJoin('companies', 'companyUserSaves.company_id', 'companies.id')
			.where('userJobSaves.user_id', 'companyUserSaves.user_id');

		console.log(userMatches);

		return userMatches;
	} catch (error) {
		return error;
	}
}
