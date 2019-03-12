const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	getAllCompanies,
	getCompanyInfo,
	getCompanyById,
	updateCompany,
	// deleteCompany,
};

function getAllCompanies() {
	return db('companies').select('id', 'companyName', 'email', 'bio', 'address');
}

function getCompanyInfo(user) {
	return db('companies')
		.where('email', user.email)
		.select('id', 'companyName', 'email', 'bio', 'address')
		.first();
}
async function getCompanyById(id) {
	const jobs = await db('jobPosting').where('company_id', id);

	jobs.forEach(job => {
		job.jobTags = job.jobTags.split(' ');
	});
	const company = await db('companies')
		.where('id', id)
		.select('id', 'companyName', 'email', 'bio', 'address')
		.first();
	Object.assign(company, { comapnyJobs: jobs });
	return company;
}

function updateCompany(user, updateInfo) {
	return db('companies')
		.where('email', user.email)
		.update(updateInfo);
}

// function deleteCompany(user) {
// 	console.log('delete', user.email);
// 	const userDelete = db('companies')
// 		.where('email', user.email)
// 		.del();
// 	return user.email;
// }
