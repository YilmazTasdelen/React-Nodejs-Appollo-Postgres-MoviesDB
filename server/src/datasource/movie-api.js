const { RESTDataSource } = require('apollo-datasource-rest');

class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        // the Catstronauts catalog is hosted on this server
        this.baseURL = 'localhost:8000/v1/';
    }

    getMovies() {
        return this.get('films');
    }

    getActor(actorId) {
        return this.get(`actors/${actorId}`);
    }
}

module.exports = MovieAPI;
