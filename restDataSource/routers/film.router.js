const express = require('express');

const filmRouter = express.Router();
const { httpGetAllFilms } = require('../controllers/film.controller');

filmRouter.get('/', httpGetAllFilms);

module.exports = filmRouter;