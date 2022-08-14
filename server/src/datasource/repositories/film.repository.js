const { connect } = require('../config/db.config');

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
            const films = await this.db.films.findAll();
            console.log('films:::', films);
            return films;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}

module.exports = new FilmRepository();