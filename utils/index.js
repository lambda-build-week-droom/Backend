// const makeTwenty = (items) => {
//     let item = []
//     for (let i = 0; i < 20; i++) {
//         item.push(items[i])
//     }
//     return item
// }

// module.exports = makeTwenty
const faker = require('faker');

const repeat = (item, num) => {
    items = []
    while (num !== 0) {
        items.push(item)
        return repeat(item, num - 1)
    }
    return items
}

console.log(repeat({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    occupation: faker.name.jobTitle(),
    experience: 'experience',
    interests: 'interests'
}, 20))

module.exports = { repeat }