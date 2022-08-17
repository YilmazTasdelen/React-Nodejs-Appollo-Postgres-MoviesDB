import React from 'react'

const HomeCard = ({ movie }) => {
    return (
        <div className='card'>
            <div className='container'>
                <h4><b>{movie.title}</b></h4>
                <p>{movie.description}</p>
            </div>
        </div>
    )
}

export default HomeCard;


const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '40%',
    },
    container: {
        padding: '2px 16px'
    }
};