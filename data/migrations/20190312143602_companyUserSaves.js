exports.up = function(knex, Promise) {
	return knex.schema.createTable('companyUserSaves', tbl => {
		tbl.increments();
		tbl.integer('company_id').unsigned();
		tbl.foreign('company_id').references('companies.id');

		tbl.integer('user_id').unsigned();
		tbl.foreign('user_id').references('users.id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('companyUserSaves');
};
