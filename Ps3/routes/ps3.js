var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('GetandPost', { string: 'Cs412Ps3' });
});

router.post('/', (req, res, next) => {
    req.params.string = req.body.string
    req.params.stringlength = req.body.string.length
    res.render('GetandPost', {string: req.params.string, stringlength: req.params.stringlength });
});
module.exports = router;