import React from 'react'
import { Card, List, Divider } from 'antd';

const HomeCard = ({ movie }) => {
    return (

        <List.Item>
            <Card title={movie.title}>
                <h4> {movie.description}</h4>
                <Divider />
                Actors; <br />
                {movie.actors?.map(actor => (
                    <span>{actor.first_name}&nbsp;{actor.last_name}, </span>
                ))}
            </Card>
        </List.Item>

    )
}

export default HomeCard;
