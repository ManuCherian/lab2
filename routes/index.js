var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Manu' });
});

router.get('/mom', (req, res, next) => {
    res.render('mom', { message: 'My mothers name is Sherly, she is currently staying in India. She is a house wife.' });
});

router.get('/dad', (req, res, next) => {
    res.render('dad', { message: 'My dads name is Cherian, he is a farmer in Kerala,India.' });
});

router.get('/sister', (req, res, next) => {
    res.render('sister', { message: 'My Sister has finished her nusrsing classes and she is current working at a hospital in India.' });
});

module.exports = router;
