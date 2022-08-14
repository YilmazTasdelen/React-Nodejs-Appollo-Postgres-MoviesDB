const filmService = require('./src/datasource/services/film.service');

var res = filmService.getFilms();
console.log("test", res);