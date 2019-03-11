const faker = require('faker');

function generateProfile() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        occupation: faker.name.jobTitle(),
        experience: 'experience',
        interests: 'interests'
    }
}

function accumulate(cb, iterations) {
    if (iterations > 0) {
        return [cb()].concat(accumulate(cb, iterations - 1))
    } else {
        return []
    }
}

const list = accumulate(generateProfile, 20)


module.exports = { list }