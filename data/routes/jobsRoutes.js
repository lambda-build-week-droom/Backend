const express = require('express');

const jobsHelper = require('../helpers/jobsHelper');
const companyHelper = require('../helpers/companyHelper');

const { restricted } = require('../middleware/middleware');
const router = express.Router();

// Create Job
router.post('/', restricted, async (req, res) => {
	try {
		// console.log(req.body.company_id);
		const company = await companyHelper.getCompanyInfo(req.decodedToken);
		console.log('company', company);
		if (company && req.body.company_id) {
			const result = jobsHelper.createJob(req.body);
			res.status(201).json(result);
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

//Get All Jobs
router.get('/', restricted, async (req, res) => {
	try {
		const result = await jobsHelper.getAllJobs();
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
});

//Get logged in user
router.get('/info', restricted, async (req, res) => {
	try {
		const result = await userHelper.getUserInfo(req.decodedToken.subject);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Update Job
router.put('/:id/update', restricted, async (req, res) => {
	try {
		const updateInfo = req.body;
		const { id } = req.params;
		const result = await jobsHelper.updateJob(id, updateInfo);
		res.status(200).json(result); // returns a 1 if updated
	} catch (error) {
		res.status(500).json(error);
	}
});

// Delete Job
router.delete('/:id/delete', restricted, async (req, res) => {
	try {
		const { id } = req.params;
		const result = await jobsHelper.deleteJob(id);
		console.log(result);
		res.status(204).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Get Job by ID
router.get('/:id', restricted, async (req, res) => {
	try {
		const { id } = req.params;
		const result = await jobsHelper.getJobById(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Save job to a user profile
router.post('/:id/save', restricted, async (req, res) => {
	try {
		const { id } = req.params;
		const result = await jobsHelper.saveJob(req.decodedToken.subject, id);
		res.status(201).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Remove job from a profile
router.delete('/:id/remove', restricted, async (req, res) => {
	try {
		const { id } = req.params;
		const result = await jobsHelper.removeJob(req.decodedToken.subject, id);
		res.status(201).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
