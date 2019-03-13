exports.up = function(knex, Promise) {
	return knex.schema.table('jobPosting', tbl => {
		tbl.string('jobImg');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('jobPosting').dropColumn('jobImg');
};
