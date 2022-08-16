const actorService = require('../services/actor.service');

async function httpGetActor(req, res) {
    const id = req.params.id;
    return res.status(200).json(await actorService.getActor(id));
}

module.exports = {
    httpGetActor,
};
