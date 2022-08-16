const actorRepository = require('../repositories/actor.repository');

class ActorService {

    constructor() { }

    async getActor(id) {
        return await actorRepository.getActor(id);
    }
}

module.exports = new ActorService();