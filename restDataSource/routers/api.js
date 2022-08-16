const express = require('express');

const filmRouter = require('./film.router');
const actorRouter = require('./actor.router');


const api = express.Router();

api.use('/films', filmRouter);
api.use('/actors', actorRouter);


module.exports = api;