const filmRepository = require('../repositories/film.repository');

class FilmService {

    constructor() { }

    async getFilms() {
        return await filmRepository.getFilms();
    }

    async getFilmsWithActors() {
        return await filmRepository.getFilmsWithActors();
    }
}

module.exports = new FilmService();