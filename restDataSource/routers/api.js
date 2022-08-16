const express = require('express');

const filmRouter = require('./film.router');

const api = express.Router();

api.use('/films', filmRouter);


module.exports = api;