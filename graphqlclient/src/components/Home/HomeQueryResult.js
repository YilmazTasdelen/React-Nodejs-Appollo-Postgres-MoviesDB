import React from 'react';
// import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';

const HomeQueryResult = ({ loading, error, data, children }) => {
  console.log("sdasdsa");
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <div className={styles.SpinnerContainer}>
        {/* <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" /> */}
        waiting....
      </div>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default HomeQueryResult;
/** Query Result styled components */
const styles = {
  SpinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  }
};
