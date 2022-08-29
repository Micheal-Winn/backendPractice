var express = require('express');
var router = express.Router();
var users = require("./../controller/user")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/',users.saveUser);
router.get('/hello',users.hello);

router.get('/:userId', function(req, res, next) {
    res.send('min ga lar par');
});

module.exports = router;