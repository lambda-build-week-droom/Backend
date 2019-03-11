const faker = require('faker');
const { repeat } = require('../../utils/')
exports.seed = function(knex, Promise) {
    return knex('users')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert(repeat({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                occupation: faker.name.jobTitle(),
                experience: 'experience',
                interests: 'interests'
            }, 20));
        });
};