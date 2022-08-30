var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:userId', function(req, res, next) {
    res.send('min ga lar par');
});

module.exports = router;