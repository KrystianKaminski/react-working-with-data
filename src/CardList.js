import React from 'react'
import Card from './Card';

const CardList = (props) => {
    return (
        <div>
            <Card
                name="Philippe Bruhat (BooK)"
                avatar_url="https://avatars0.githubusercontent.com/u/44421?v=4"
                company="Booking.com"
            />
            <Card />
        </div>
    )
}

export default CardList