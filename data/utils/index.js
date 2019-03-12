const faker = require('faker');

function generateProfile() {
	return {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		occupation: faker.name.jobTitle(),
		experience: 'experience',
		interests: 'interests',
	};
}

function generateJobs() {
	return {
		jobTitle: faker.name.jobTitle(),
		jobPosition: faker.name.jobType(),
		jobDescription: faker.name.jobDescriptor(),
		jobRequirements: faker.name.jobArea(),
		jobSalary: faker.commerce.price(),
		jobTags: faker.lorem.words(),
		jobOpenDate: faker.date.recent(),
		jobCloseDate: faker.date.future(),
		company_id: faker.random.number({
			min: 1,
			max: 25,
		}),
	};
}
function generateCompanies() {
	return {
		companyName: faker.company.companyName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		bio: faker.lorem.paragraph(),
		address: faker.address.streetAddress(),
	};
}

function accumulate(cb, iteration) {
	if (iteration > 0) {
		return [cb()].concat(accumulate(cb, iteration - 1));
	} else {
		return [];
	}
}

// creates 25 users
const list = accumulate(generateProfile, 25);
const jobs = accumulate(generateJobs, 100);
const companyList = accumulate(generateCompanies, 25);

module.exports = {
	list,
	jobs,
	companyList,
};
