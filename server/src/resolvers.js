const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    movies: (_, __, { dataSources }) => {
      return dataSources.movieAPI.getMovies();
    },

    // get a single track by ID, for the track page
    actor: (_, { id }, { dataSources }) => {
      return dataSources.movieAPI.getActor(id);
    },

  },
  Film: {
    actors: ({ film_id }, _, { dataSources }) => {
      console.log(film_id);
      return dataSources.movieAPI.getActor(film_id);
    }
  },
};

module.exports = resolvers;
