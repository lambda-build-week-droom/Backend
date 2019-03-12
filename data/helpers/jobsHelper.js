const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	createJob,
	getAllJobs,
	getJobById,
	updateJob,
	// deleteUser,
};

function createJob(jobPost) {
	console.log(jobPost);
	db('jobPosting').insert(jobPost);
	return 1;
}
function getAllJobs() {
	return db('jobPosting');
}

function getJobById(id) {
	return db('jobPosting')
		.where('id', id)
		.first();
}

function updateJob(id, updateInfo) {
	return db('jobPosting')
		.where('id', id)
		.update(updateInfo);
}

// function deleteUser(user) {
// 	console.log('delete', user.email);
// 	const userDelete = db('users')
// 		.where('email', user.email)
// 		.del();
// 	return user.email;
// }
