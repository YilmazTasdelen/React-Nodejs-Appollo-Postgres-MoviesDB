const express = require('express');

const filmRouter = express.Router();
const { httpGetAllFilms, httpCreateMovie } = require('../controllers/film.controller');

filmRouter.get('/', httpGetAllFilms);

filmRouter.post('/', httpCreateMovie);

module.exports = filmRouter;