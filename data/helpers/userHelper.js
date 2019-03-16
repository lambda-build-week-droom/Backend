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
	deleteUser,
	match,
};

function getAllUsers() {
	return db('users').select(
		'id',
		'firstName',
		'lastName',
		'occupation',
		'experience',
		'interests',
		'userImg'
	);
}

function getSaves(id) {
	return db('userJobSaves').where('user_id', id);
}

async function getUserInfo(user) {
	try {
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
				'jobCloseDate',
				'jobImg'
			);
		const userInfo = await db('users')
			.where('id', user.subject)
			.select(
				'id',
				'firstName',
				'lastName',
				'email',
				'occupation',
				'experience',
				'interests',
				'userImg'
			)
			.first();
		Object.assign(userInfo, { saved: likes });
		return userInfo;
	} catch (error) {
		return error;
	}
}

async function getUserById(id) {
	try {
		const user = await db('users')
			.where('id', id)
			.select(
				'id',
				'firstName',
				'lastName',
				'occupation',
				'experience',
				'interests',
				'userImg'
			)
			.first();
		return user;
	} catch (error) {
		// res.status(500).send('Internal server error');
		return error;
	}
}

function updateUser(user, updateInfo) {
	return db('users')
		.where('email', user.email)
		.update(updateInfo);
}

async function deleteUser(user) {
	try {
		const result = await db('userJobSaves')
			.where('user_id', user)
			.del();
		const userDelete = await db('users')
			.where('id', user)
			.del();
		return { message: 'Success' };
	} catch (error) {
		return error;
	}
}

function saveUser(companyId, userId) {
	return db('companyUserSaves').insert({ company_id: companyId, user_id: userId }, 'id');
}

function removeUser(companyId, userId) {
	return db('companyUserSaves')
		.where({ company_id: companyId, user_id: userId })
		.del();
}

async function match(id) {
	try {
		const userMatches = await db('userJobSaves')
			.join('companyUserSaves', 'userJobSaves.company_id', 'companyUserSaves.company_id')
			.where('userJobSaves.user_id', id)
			.where('companyUserSaves.user_id', id)
			.select(
				'userJobSaves.user_id as UserId',
				'userJobSaves.company_id as companyId',
				'userJobSaves.job_id as jobId'
			);
		return userMatches;
	} catch (error) {
		return error;
	}
}
