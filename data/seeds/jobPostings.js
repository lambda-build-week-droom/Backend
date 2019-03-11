const { jobs } = require('../utils/');
exports.seed = function(knex, Promise) {
	return knex('jobPosting')
		.truncate()
		.then(function() {
			// Inserts seed entries
			// list generates 25 fake jobs
			return knex('jobPosting').insert(jobs);
		});
};
