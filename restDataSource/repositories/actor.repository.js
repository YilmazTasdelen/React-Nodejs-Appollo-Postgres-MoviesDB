const { connect } = require('../config/db.config');
const actor = require('../models/actor.model');
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const Film = require('../models/film.model');

class ActorRepository {

    db = {};

    constructor() {
        this.db = connect();
    }

    async getActor(id) {
        const actor = await this.db.actors.findAll({
            where: {
                actor_id: id,
            },
            raw: true,
        });
        console.log('films:::', actor);
        return actor;
    }
}

module.exports = new ActorRepository();