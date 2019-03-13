exports.up = function(knex, Promise) {
	return knex.schema.table('companies', tbl => {
		tbl.string('companyImg');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('companies').dropColumn('companyImg');
};
