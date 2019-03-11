const { companyList } = require('../utils/');
exports.seed = function(knex, Promise) {
	return knex('companies')
		.truncate()
		.then(function() {
			// Inserts seed entries
			// list generates 25 fake jobs
			return knex('companies').insert(companyList);
		});
};
