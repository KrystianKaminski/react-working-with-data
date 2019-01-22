import React from 'react'

const Card = (props) => {
    return (
        <div style={{
            margin: '1em'
        }}>
            <img
                width="75"
                src="https://avatars0.githubusercontent.com/u/44421?v=4"
            />
            <div style={{
                display: 'inline-block',
                marginLeft: 10
            }}>
                <div style={{
                    fontSize: '1.25em',
                    fontWeight: 'bold'
                }}>
                    Philippe Bruhat (BooK)
                </div>

                <div>
                    Booking.com
                </div>
            </div>
        </div>
    )
}

export default Card