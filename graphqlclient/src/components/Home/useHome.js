import React from 'react'

const useHome = () => {


    const { loading, error, data } = useQuery(MOVIES);
    return {
        loading, error, data,
    }
}

export default useHome