var express = require('express');
var router = express.Router();
var movies = require('./../controller/MovieController')


router.get('/',movies.getAllMovie);
router.post('/',movies.newMovie);
router.get('/:movieId ',movies.getMovieById);
router.put('/:movieId',movies.updateMovie)









module.exports = router;