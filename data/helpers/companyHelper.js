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
	const company = await db('companies')
		.where('id', id)
		.select('id', 'companyName', 'email', 'bio', 'address')
		.first();
	companyWithJobs = {
		id: company.id,
		companyName: company.companyName,
		email: company.email,
		bio: company.bio,
		address: company.address,
		companyJobs: jobs,
	};
	return companyWithJobs;
}

function updateCompany(user, updateInfo) {
	console.log(updateInfo);
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
