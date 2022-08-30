let Movies = require('../model/movie');
const getAllMovies = async ()=>{
    return Movies.find();
}
const getMovieById = async (movieId)=>{
    return Movies.findById(movieId)
}
const newMovie = async (movie)=>{
    const newMovie = new Movies(movie);
    return newMovie.save();
}

const updateMovie = async (movieId,movie)=>{
    const newMovie = await Movies.findByIdAndUpdate(movieId,movie,{new:true});
    return newMovie;
}



module.exports = {
    getAllMovies,
    newMovie,
    getMovieById,
    updateMovie
}