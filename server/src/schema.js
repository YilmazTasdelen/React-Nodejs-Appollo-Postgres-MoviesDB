const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {

    movies:[Film!]!
    
    actor(id: ID!):Actor

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
