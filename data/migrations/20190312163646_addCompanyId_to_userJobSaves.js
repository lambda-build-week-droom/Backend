exports.up = function(knex, Promise) {
	return knex.schema.table('userJobSaves', tbl => {
		tbl.integer('company_id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('userJobSaves').dropColumn('company_id');
};
