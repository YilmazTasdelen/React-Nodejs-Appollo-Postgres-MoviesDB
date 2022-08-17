import React from 'react'
import HomeCard from '../HomeCard';
import HomeQueryResult from './HomeQueryResult';
import useHome from './useHome';


const Home = () => {
  const { loading, error, data } = useHome();
  console.log(data);
  return (
    <>
      <HomeQueryResult error={error} loading={loading} data={data}>
        {data?.movies?.map((movie, index) => (
          // <div key={movie.id} >
          //   {movie.title}
          // </div>

          <HomeCard key={movie.id} movie={movie} />
        ))}
      </HomeQueryResult>
    </>
  )
}

export default Home