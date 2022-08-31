var express = require('express');
var router = express.Router();
var review = require('./../controller/reviewController');


router.get('/',review.getAllReview);
router.post('/',review.saveReview);
<<<<<<< HEAD
router.get('/:reviewId ',review.getReviewById);

=======
// router.get('/:movieId ',movies.getMovieById);
>>>>>>> github/master
// router.get('/title/:title',movies.findMovieByTitle)



module.exports = router;