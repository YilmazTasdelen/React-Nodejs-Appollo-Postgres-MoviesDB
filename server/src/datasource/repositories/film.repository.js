const { connect } = require('../config/db.config');
const actor = require('../models/actor.model');
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const Film = require('../models/film.model');

class FilmRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getFilms() {

        try {
            const filmList = await this.db.sequelize.query('SELECT * FROM film', {
                model: this.db.films,
                mapToModel: true // pass true here if you have any mapped fields
            });


            // const films = await this.db.films.findAll();
            console.log('films:::', filmList[0]["dataValues"]);
            return filmList;
        } catch (err) {
            console.log(err);
            return [];
        }
    }


    async getFilmsWithActors() {
        const FilmsToActors = await this.db.films.findAll({
            where: {
                film_id: 1,

            },

            include: [
                {
                    model: sequelize.model('actors'),
                    as: 'actors',
                    through: 'film_actor',
                },
            ],
        });
        console.log('films:::', FilmsToActors[0]);
        return FilmsToActors;
    }
}

module.exports = new FilmRepository();