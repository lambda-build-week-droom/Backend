exports.up = function(knex, Promise) {
	return knex.schema.table('users', tbl => {
		tbl.renameColumn('profileImg', 'userImg');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('users').renameColumn('userImg', 'profileImg');
};
