const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {

    movies:[Film!]!
    
    actor(id: ID!):Actor

  }
 
  type Mutation {
    createMovie(
                  title:String
                  description:String
                  release_year:Int
                  rating:String,
                  language_id:Int,
                                      ): CreateMovieViewsResponse!
  }

  type CreateMovieViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    film: Film
  }

  type Film{
    film_id:Int
    title:String
    description:String
    release_year:String
    actors:[Actor]
    
 }


 type Actor{
    actor_id:Int
    first_name:String
    last_name:String
 }

 
  
`;

module.exports = typeDefs;
