import React from 'react'
import HomeCard from '../HomeCard';
import HomeQueryResult from './HomeQueryResult';
import useHome from './useHome';
import { List, Divider } from 'antd';

const Home = () => {
  const { loading, error, data } = useHome();
  console.log(data);
  return (
    <HomeQueryResult error={error} loading={loading} data={data}>
      <Divider />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        dataSource={data?.movies}
        renderItem={(item) => (
          <HomeCard key={item.id} movie={item} />
        )}
      />
    </HomeQueryResult>
  )
}

export default Home