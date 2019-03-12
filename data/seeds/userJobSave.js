const { jobSaves } = require('../utils/');
exports.seed = function(knex, Promise) {
	return knex('userJobSaves')
		.truncate()
		.then(function() {
			// Inserts seed entries
			// list generates 25 fake jobs
			return knex('userJobSaves').insert(jobSaves);
		});
};
