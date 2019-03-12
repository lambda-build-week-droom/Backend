exports.up = function(knex, Promise) {
	return knex.schema.createTable('userJobSaves', tbl => {
		tbl.increments();
		tbl.integer('user_id').unsigned();
		tbl.foreign('user_id').references('users.id');

		tbl.integer('job_id').unsigned();
		tbl.foreign('job_id').references('jobPosting.id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('userJobSaves');
};
