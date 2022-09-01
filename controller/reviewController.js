const reviewServices = require('./../services/reviewServices');

const getAllReview = async (req,res,next)=>
{
    try {
        const reviews = await reviewServices.getAllReview();
        if(!reviews) throw Error('No reviews');
        await res.status(200).json(reviews)
    }catch (err)
    {
        await res.status(400).json({message:err})
    }
}
const saveReview = async (req,res,next)=>{
    try {
        const body = req.body;
        const review = await reviewServices.saveReview(body);
        if(!review) throw Error('review cannot be saved');
        await res.status(201).json(review)
    }catch (err)
    {
        await res.status(400).json({message:err})
    }
}

const getReviewById = async (req,res,next)=>{
    try {
        let reviewId = req.params['reviewId'];
        // console.log("reviewID",reviewId)
        const review = await reviewServices.getReviewById(reviewId);
        if(!review) throw Error('No review');
        await res.status(200).json(review)
    }catch (err)
    {
        await res.status(400).json({message:err})
    }
}







module.exports = {
    saveReview,
    getAllReview,
    getAllReview,
    getReviewById
}