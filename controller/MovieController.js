var moviesService = require('./../services/movieService')

const getAllMovie = async (req,res,next)=>{
    console.log('Movie Controller user',req.user);
    try {
        const movies = await moviesService.getAllMovies();
        if(!movies) throw Error("No movies");
        await res.status(200).json(movies);
    } catch (error)
    {
        await res.status(400).json({message:error})
    }
}

module.exports = {
    getAllMovie
}