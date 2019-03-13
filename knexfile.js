const localPgConnection = {
	host: 'localhost',
	database: 'hobbits',
	user: 'student',
	password: 'pass',
};
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/db/dev.sqlite3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
	testing: {
		client: 'sqlite3',
		connection: {
			filename: './data/db/test.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
	// production: {
	// 	client: 'sqlite3',
	// 	connection: {
	// 		filename: './data/db/prod.db3',
	// 	},
	// 	migrations: {
	// 		directory: './data/migrations',
	// 	},
	// 	seeds: {
	// 		directory: './data/seeds',
	// 	},
	// },

	production: {
		client: 'postgresql',
		connection: prodDbConnection,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
};
