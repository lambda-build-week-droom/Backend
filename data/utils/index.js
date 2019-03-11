const faker = require('faker')

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

function accumulate(cb, iteration) {
    if (iteration > 0) {
        return [cb()].concat(accumulate(cb, iteration - 1))
    } else {
        return []
    }
}

// creates 25 users
const list = accumulate(generateProfile, 25)

module.exports = {
    list
}