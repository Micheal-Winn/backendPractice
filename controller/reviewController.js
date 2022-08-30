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





module.exports = {
    saveReview,
    getAllReview
}