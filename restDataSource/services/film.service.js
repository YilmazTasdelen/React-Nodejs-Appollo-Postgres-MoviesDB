const filmRepository = require('../repositories/film.repository');

class FilmService {

    constructor() { }

    async getFilms() {
        return await filmRepository.getFilms();
    }

    async getFilmsWithActors() {
        return await filmRepository.getFilmsWithActors();
    }

    async createMovie(movie) {
        return await filmRepository.createMovie(movie);
    }
}

module.exports = new FilmService();