let Movies = require('../model/movie');
const getAllMovies = async ()=>{
    return Movies.find();
}
module.exports = {
    getAllMovies
}