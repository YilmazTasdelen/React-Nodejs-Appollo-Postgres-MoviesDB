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
    Actor: ({ actor_id }, _, { dataSources }) => {
      return dataSources.movieAPI.getActor(actor_id);
    }
  },
};

module.exports = resolvers;
