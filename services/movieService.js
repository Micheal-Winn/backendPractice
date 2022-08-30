let Movies = require('../model/movie');
const getAllMovies = async ()=>{
    return Movies.find();
}
const getMovieById = async (movieId)=>{
    return Movies.findById(movieId);
}
const searchMovieByTitle = async (movieTitle)=>{
    const movies = await Movies.find({
        title:{
            $regex : movieTitle
        }
    });
    return movies;
}

const newMovie = async (movie)=>{
    const newMovie = new Movies(movie);
    return newMovie.save();
}

const updateMovie = async (movieId,movie)=>{
    const newMovie = await Movies.findByIdAndUpdate(movieId,movie,{new:true});
    return newMovie;
}

const deleteMovie = async (movieId)=>{
    const deleteMovie = await Movies.findByIdAndDelete(movieId);
    return deleteMovie;
}


module.exports = {
    getAllMovies,
    newMovie,
    getMovieById,
    updateMovie,
    deleteMovie,
    searchMovieByTitle
}