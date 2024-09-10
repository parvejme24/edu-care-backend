const express = require('express');
const collegeRouter = express.Router();
const collegeController = require('../controllers/CollegeController');


collegeRouter.post('/colleges', collegeController.createCollege);
collegeRouter.get('/colleges', collegeController.getAllColleges);
collegeRouter.get('/colleges/:id', collegeController.getCollegeById);
collegeRouter.put('/colleges/:id', collegeController.updateCollege);
collegeRouter.delete('/colleges/:id', collegeController.deleteCollege);
collegeRouter.get('/colleges/search', collegeController.searchCollege);
collegeRouter.get('/colleges/top-rated', collegeController.getTopRatedColleges);


module.exports = collegeRouter;
