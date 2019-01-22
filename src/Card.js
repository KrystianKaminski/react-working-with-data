import React from 'react'

const Card = (props) => {
    return (
        <div style={{
            margin: '1em'
        }}>
            <img src="http://placehold.it/75" />
            <div style={{
                display: 'inline-block',
                marginLeft: 10
            }}>
                <div style={{
                    fontSize: '1.25em',
                    fontWeight: 'bold'
                }}>
                    Name here...
                </div>

                <div>
                    Company name here...
            </div>
            </div>
        </div>
    )
}

export default Card