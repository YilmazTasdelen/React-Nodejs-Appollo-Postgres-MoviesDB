const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {

    categories:[Category!]!

    topTenFilms:[Film!]!

  }
 

  type Film{

    film_id:Int
    title:String
    description:String
    release_year:String
    rating:Int
    category:Category
    
 }


 type Category{

    category_id:Int
    name:String

 }

 
  
`;

module.exports = typeDefs;
