import React from 'react'
import { useQuery, gql } from '@apollo/client';

const MOVIES = gql`
  query Movies {
  movies {
    film_id
    title
    description
    release_year
    actors {
      actor_id
      first_name
      last_name
    }
  }
}
`;

const Home = () => {
    const { loading, error, data } = useQuery(MOVIES);
    console.log(data);
    return (
        <>
            test
            {data?.movies?.map((movie, index) => (
                <div key={movie.id} >
                    {movie.title}
                </div>
            ))}
        </>
    )
}

export default Home