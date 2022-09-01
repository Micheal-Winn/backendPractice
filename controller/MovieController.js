var moviesService = require('./../services/movieService');


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

const newMovie = async (req,res,next)=>
{
    console.log("new movie",req.body);
    try {
        const movie = await moviesService.newMovie(req.body);
        if(!movie) throw Error('Cannot save movie');
        await res.status(201).json(movie);
    }catch (err)
    {
        console.log(err);
        await res.status(400).json({message:err})
    }
}

const getMovieById = async (req,res,next)=>
{
    let movieId = req.params['movieId'];
    console.log("Req movie Id",movieId);
    try {
        const movies = await moviesService.getMovieById(movieId);
        if(!movies) throw Error("No movies found")
        await res.status(200).json(movies);
    }catch (error)
    {
        await res.status(404).json({message:error})
    }
}

const findMovieByTitle = async (req,res,next)=>{
    let title = req.params['title'];
    try {
        const movies = await moviesService.searchMovieByTitle(title);
        if(!movies) throw Error('Cannot found Movie');
        await res.status(200).json(movies);
    }catch (err)
    {
        await res.status(404).json({message:err})
    }
}

const  updateMovie = async (req,res,next)=>{
    let movieId = req.params['movieId'];
    let movie = req.body;
    console.log(`new movie ${movieId}`,req.body);
    try {
        const updateMovie = await moviesService.updateMovie(movieId,movie);
        if(!updateMovie) throw Error('Cannot update movie');
        await res.status(200).json(updateMovie);
    }catch (err)
    {
        await res.status(400).json({message:err})
    }
}

const deleteMovie = async (req,res,next)=>{
    let movieId = req.params['movieId'];
    try {
        const deletedMovie = await moviesService.deleteMovie(movieId);
        if(!deletedMovie) throw Error('Cannot delete Movie');
        await res.status(200).json(deletedMovie);
    }catch (err)
    {
        await res.status(400).json({message:err})
    }
}




module.exports = {
    getAllMovie,
    newMovie,
    getMovieById,
    updateMovie,
    deleteMovie,
    findMovieByTitle
}