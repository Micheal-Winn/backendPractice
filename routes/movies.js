var express = require('express');
var router = express.Router();
var movies = require('./../controller/MovieController')


router.get('/',movies.getAllMovie)









module.exports = router;