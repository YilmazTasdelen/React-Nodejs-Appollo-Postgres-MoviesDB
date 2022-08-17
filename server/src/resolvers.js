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
  Mutation: {
    // increments a track's numberOfViews property
    createMovie: async (_, { title, description, release_year, rating, language_id }, { dataSources }) => {
      try {
        const newMovie = await dataSources.movieAPI.createMovie(title, description, release_year, rating, language_id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${newMovie.film_id}`,
          newMovie,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          newMovie: null,
        };
      }
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
