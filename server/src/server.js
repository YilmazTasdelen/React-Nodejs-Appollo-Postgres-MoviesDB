const filmService = require('./datasource/services/film.service');


var filmactors = await filmService.getFilmsWithActors();

//console.log("test", filmactors[0]);