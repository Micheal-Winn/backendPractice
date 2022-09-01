var express = require('express');
var router = express.Router();
var movies = require('./../controller/MovieController')

router.post('/',movies.newMovie);
router.get('/',movies.getAllMovie);
router.get('/:movieId',movies.getMovieById);
router.get('/title/:title',movies.findMovieByTitle)
router.put('/:movieId',movies.updateMovie);
router.delete('/:movieId',movies.deleteMovie)









module.exports = router;