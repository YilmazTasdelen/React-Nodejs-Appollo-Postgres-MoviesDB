const express = require('express');

const actorRouter = express.Router();
const { httpGetActor } = require('../controllers/actor.controller');

actorRouter.get('/:id', httpGetActor);

module.exports = actorRouter;