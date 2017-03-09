var express = require('express');
var request = require('request');
var apiOptions = { server : "http://localhost:8083/" };


var router = express.Router();
var ctrlChapters = require('../controllers/chapters');
var ctrlOthers = require('../controllers/others');
var ctrlSurvivalModels = require('../controllers/survival-models');

/* Chapters. */
router.get('/', ctrlChapters.contents);
router.get('/survival-models', ctrlChapters.survivalModels);
router.get('/life-tables', ctrlChapters.lifeTables);

/* Survival models */
router.get('/survival-models/gompertz-law', ctrlSurvivalModels.gompertzLaw);
router.post('/survival-models/gompertz-law', ctrlSurvivalModels.gompertzLawResults);
//router.post('/survival-models/gompertz-law', ctrlSurvivalModels.gompertzLawResults);
//router.get('/survival-models/gompertz-law-results', function (req, res) {console.log('Hello GET');});
//ctrlSurvivalModels.gompertzLawResults);
router.get('/survival-models/makehams-law', ctrlSurvivalModels.makehamsLaw);

/* Ohters */
router.get('/about', ctrlOthers.about);

module.exports = router;

