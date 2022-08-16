const filmServices = require('../services/film.service');

async function httpGetAllFilms(req, res) {
    return res.status(200).json(await filmServices.getFilms());
}

module.exports = {
    httpGetAllFilms,
};
