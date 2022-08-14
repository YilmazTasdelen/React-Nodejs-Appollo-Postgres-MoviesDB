const filmRepository = require('../repositories/film.repository');

class FilmService {

    constructor() { }

    async getFilms() {
        return await filmRepository.getFilms();
    }
}

module.exports = new FilmService();