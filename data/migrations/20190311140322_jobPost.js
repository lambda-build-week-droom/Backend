exports.up = function(knex, Promise) {
	return knex.schema.createTable('jobPosting', tbl => {
		tbl.increments();

		tbl.string('jobTitle', 255);
		tbl.string('jobPosition', 255);
		tbl.string('jobDescription', 255);
		tbl.string('jobRequirements', 255);
		tbl.integer('jobSalary');
		tbl.string('jobTags', 255);
		tbl.string('jobOpenDate', 255);
		tbl.string('jobCloseDate', 255);
		tbl.integer('company_id').unsigned();
		tbl.foreign('company_id').references('companies.id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('jobPosting');
};
