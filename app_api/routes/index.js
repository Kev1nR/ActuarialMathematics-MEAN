var express = require('express');
var router = express.Router();
var ctrlSurvivalModels = require('../controllers/survival-models');


// Survival models
//router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/survival-models/gompertzLaw', ctrlSurvivalModels.gompertzlaw);
//router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
//router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
//router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);

module.exports = router;