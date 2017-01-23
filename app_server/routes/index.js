var express = require('express');
var router = express.Router();
var ctrlChapters = require('../controllers/chapters');
var ctrlOthers = require('../controllers/others');

/* Chapters. */
router.get('/', ctrlChapters.contents);
router.get('/chapter1', ctrlChapters.chapter1);

/* Ohters */
router.get('/about', ctrlOthers.about);

module.exports = router;
