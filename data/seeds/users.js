const faker = require('faker');
exports.seed = function(knex, Promise) {
	return knex('users')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					occupation: faker.name.jobTitle(),
					experience: 'experience',
					interests: 'interests'
				}
			]);
		});
};
