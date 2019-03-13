const express = require('express');

const companyHelper = require('../helpers/companyHelper');

const { restricted } = require('../middleware/middleware');
const router = express.Router();

//Get All Companies
router.get('/', restricted, async (req, res) => {
	try {
		const result = await companyHelper.getAllCompanies();
		res.status(200).json(result);
	} catch {
		res.status(500).json({ message: 'Internal server error' });
	}
});

//Get logged in company
router.get('/info', restricted, async (req, res) => {
	const result = await companyHelper.getCompanyInfo(req.decodedToken);
	res.status(200).json(result);
});

// Get Company by ID
router.get('/:id', restricted, async (req, res) => {
	const { id } = req.params;
	const result = await companyHelper.getCompanyById(id);
	res.status(200).json(result);
});

//Update Company
router.put('/update', restricted, async (req, res) => {
	console.log(req.decodedToken);
	const updateInfo = req.body;
	const result = await companyHelper.updateCompany(req.decodedToken, updateInfo);
	res.status(200).json(result); // returns a 1 if updated
});

//Delete Company
router.delete('/delete', restricted, async (req, res) => {
	try {
		const company = await companyHelper.getCompanyById(req.decodedToken.subject);
		if (company) {
			const result = await companyHelper.deleteCompany(req.decodedToken.subject);
			res.status(204).json({ message: 'Success' });
		} else {
			res.status(404).json({ message: 'Unable to find that company' });
		}
	} catch (error) {
		res.status(500);
	}
});

module.exports = router;
