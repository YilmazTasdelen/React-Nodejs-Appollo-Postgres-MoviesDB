const filmServices = require('../services/film.service');

async function httpGetAllFilms(req, res) {
    return res.status(200).json(await filmServices.getFilms());
}

async function httpCreateMovie(req, res) {
    var movie = req.body;
    // console.log(movie);
    return res.status(200).json(await filmServices.createMovie(movie));
}

module.exports = {
    httpGetAllFilms,
    httpCreateMovie,
};
