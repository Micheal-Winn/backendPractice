var express = require('express');
var router = express.Router();
var review = require('./../controller/reviewController');


router.get('/',review.getAllReview);
router.get('/movie/:movieId',review.getReviewByMovieId)
router.get('/:reviewId ',review.getReviewById);
router.post('/',review.saveReview);

router.get('/:reviewId ',review.getReviewById);


// router.get('/:movieId ',movies.getMovieById);

router.put('/:reviewId',review.updateReview);
router.delete('/:reviewId',review.deleteReview)
// router.get('/:movieId ',movies.getMovieById);

// router.get('/title/:title',movies.findMovieByTitle)



module.exports = router;