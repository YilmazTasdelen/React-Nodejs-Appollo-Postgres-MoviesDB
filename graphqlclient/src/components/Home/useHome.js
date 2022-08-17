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
const useHome = () => {


    const { loading, error, data } = useQuery(MOVIES);
    return {
        loading, error, data,
    }
}

export default useHome