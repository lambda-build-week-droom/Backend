const express = require('express');
// const knex = require('knex');
// const knexConfig = require('../../knexfile');
// const db = knex(knexConfig.development);

const jobsHelper = require('../helpers/jobsHelper');
const companyHelper = require('../helpers/companyHelper');

const { restricted } = require('../middleware/middleware');
const router = express.Router();

// Create Job
router.post('/', restricted, async (req, res) => {
	const company = await companyHelper.getCompanyById(req.body.company_id);
	try {
		if (company) {
			console.log(company.id);
			const result = jobsHelper.createJob(req.body);
			res.status(201).json(result);
		} else {
			res.status(400).json({ message: 'Invalid company id' });
		}
	} catch {}
});
//Get All Jobs
router.get('/', restricted, async (req, res) => {
	try {
		const result = await jobsHelper.getAllJobs();
		res.status(200).json(result);
	} catch {
		res.status(500).json({ message: 'Internal server error' });
	}
});

//Get logged in user
router.get('/info', restricted, async (req, res) => {
	const result = await userHelper.getUserInfo(req.decodedToken);
	res.status(200).json(result);
});

// Get Job by ID
router.get('/:id', restricted, async (req, res) => {
	const { id } = req.params;
	const result = await jobsHelper.getJobById(id);
	res.status(200).json(result);
});

// Update Job
router.put('/update/:id', restricted, async (req, res) => {
	const updateInfo = req.body;
	const { id } = req.params;
	const result = await jobsHelper.updateJob(id, updateInfo);
	res.status(200).json(result); // returns a 1 if updated
});

//Delete User
// router.delete('/delete', restricted, async (req, res) => {
// 	const result = await userHelper.deleteUser(req.decodedToken);
// 	res.status(204).json(result);
// });

module.exports = router;
