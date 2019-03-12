exports.up = function(knex, Promise) {
	return knex.schema.table('users', tbl => {
		tbl.string('profileImg');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('users').dropColumn('profileImg');
};
