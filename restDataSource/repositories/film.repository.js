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
            const filmList = await this.db.sequelize.query(`SELECT f.title,f.film_id,f.description,release_year,
            ( SELECT ARRAY(SELECT actor_id FROM film_actor WHERE film_id = f.film_id))
            AS actors FROM film f limit 50`,
                {
                    model: this.db.films,
                    raw: true,
                    mapToModel: true // pass true here if you have any mapped fields
                });
            // const films = await this.db.films.findAll();
            console.log('films:::', filmList);
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

    async createMovie(movie) {
        // todo : validate movie
        console.log(movie);
        return await this.db.films.create({
            title: movie.title,
            description: movie.description,
            release_year: movie.release_year,
            rating: movie.rating,
            language_id: movie.language_id,
        });
    }
}

module.exports = new FilmRepository();