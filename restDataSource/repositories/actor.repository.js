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
        try {
            const actorList = await this.db.sequelize.query(`select a.actor_id,a.first_name,a.last_name from actor a
            left join film_actor fa on fa.actor_id = a.actor_id where fa.film_id = ${id}`,
                {
                    model: this.db.actors,
                    raw: true,
                    mapToModel: true // pass true here if you have any mapped fields
                });
            // const films = await this.db.films.findAll();
            console.log('actors:::', actorList);
            return actorList;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}

module.exports = new ActorRepository();