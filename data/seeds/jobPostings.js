exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('jobPosting')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('jobPosting').insert([
				{
					jobTitle: 'title',
					jobPosition: 'Position',
					jobDescription: 'Description',
					jobRequirements: 'Requirements',
					jobSalary: 100000,
					jobTags: 'tech, janitor',
					jobOpenDate: 'March 11th, 2019',
					jobCloseDate: 'June 1st, 2019',
					company_id: 1,
				},
				{
					jobTitle: 'title',
					jobPosition: 'Position',
					jobDescription: 'Description',
					jobRequirements: 'Requirements',
					jobSalary: 100000,
					jobTags: 'tech, janitor',
					jobOpenDate: 'March 11th, 2019',
					jobCloseDate: 'June 1st, 2019',
					company_id: 1,
				},
				{
					jobTitle: 'title',
					jobPosition: 'Position',
					jobDescription: 'Description',
					jobRequirements: 'Requirements',
					jobSalary: 100000,
					jobTags: 'tech, janitor',
					jobOpenDate: 'March 11th, 2019',
					jobCloseDate: 'June 1st, 2019',
					company_id: 2,
				},
			]);
		});
};
