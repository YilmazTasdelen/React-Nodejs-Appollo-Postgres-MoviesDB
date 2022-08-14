const filmService = require('./datasource/services/film.service');


console.log("test", await filmService.getFilms());