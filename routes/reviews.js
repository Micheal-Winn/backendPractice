var express = require('express');
var router = express.Router();
var review = require('./../controller/reviewController');


router.get('/',review.getAllReview);
router.post('/',review.saveReview);
// router.get('/:movieId ',movies.getMovieById);
// router.get('/title/:title',movies.findMovieByTitle)



module.exports = router;