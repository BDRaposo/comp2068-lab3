'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { index: "test" });
});

router.get('/claudio', function (req, res) {
    var description = "Claudio: Claudio is the father of the family and enjoys action movies."
    res.render('claudio', { claudio: description });
});

router.get('/natalie', function (req, res) {
    var description = "Natalie: Natalie is the mother of the family and enjoys brain teasers."
    res.render('natalie', { natalie: description });
});

router.get('/melanie', function (req, res) {
    var description = "Melanie: Melanie is the oldest sister of the family and is married with 2 kids."
    res.render('melanie', { melanie: description });
});

router.get('/cynthia', function (req, res) {
    var description = "Cynthia: Cynthia is the second oldest sister of the family and enjoys golfing."
    res.render('cynthia', { cynthia: description });
});

router.get('/kimberly', function (req, res) {
    var description = "Kimberly: Kimberly is the second youngest sister of the family and is a fraternal twin with Rachel."
    res.render('kimberly', { kimberly: description });
});

router.get('/rachel', function (req, res) {
    var description = "Rachel: Rachel is the youngest sister of the family and is a fraternal twin with Kimberly."
    res.render('rachel', { rachel: description });
});

router.get('/brandon', function (req, res) {
    var description = "Brandon: Brandon is the youngest and only son of the family. He enjoys video games, computers and technology."
    res.render('brandon', { brandon: description });
});

module.exports = router;
