exports.up = function(knex, Promise) {
	return knex.schema.createTable('companies', tbl => {
		tbl.increments();

		tbl.string('name', 255).notNullable().unique;
		tbl
			.string('email', 255)
			.notNullable()
			.unique();
		tbl.string('password', 255).notNullable();
		tbl.string('bio', 255)();
		tbl.string('address', 255)();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('companies');
};
