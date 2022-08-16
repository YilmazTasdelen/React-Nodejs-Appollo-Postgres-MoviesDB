const { RESTDataSource } = require('apollo-datasource-rest');

class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        // the Catstronauts catalog is hosted on this server
        this.baseURL = 'http://localhost:8001/v1/';
    }

    getMovies() {
        return this.get('films');
    }

    getActor(actor_id) {
        return this.get(`actors/${actor_id}`);
    }
}

module.exports = MovieAPI;
