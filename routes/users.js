var express = require('express');
var router = express.Router();
var users = require("./../controller/UserController")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });
//
// router.get('/:userId', function(req, res, next) {
//     res.send('min ga lar par');
// });

router.get('/:userId',users.getUserById)
router.post('/',users.registerUser);
router.post('/login',users.login)

module.exports = router;