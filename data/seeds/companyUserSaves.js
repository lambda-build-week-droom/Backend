const { userSaves } = require('../utils/');
exports.seed = function(knex, Promise) {
	return knex('companyUserSaves')
		.truncate()
		.then(function() {
			// Inserts seed entries
			// list generates 25 fake jobs
			return knex('companyUserSaves').insert(userSaves);
		});
};
