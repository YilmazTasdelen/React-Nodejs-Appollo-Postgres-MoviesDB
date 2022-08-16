const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {

    Films:[Film!]!
    
    actor(id: ID!):Actor

  }
 

  type Film{
    film_id:Int
    title:String
    description:String
    release_year:String
    actors:[Int]
    category:Category
 }


 type Actor{
    actor_id:Int
    first_name:String
    lat_name:String
 }

 
  
`;

module.exports = typeDefs;
