import React from 'react'
import './Entertainment.css'

const EntertainmentCard = ({ item }) => {
    return (
        <div className='col-lg-3 card'>
            <div className='entertainment-detail'>
                <div className='entertainment-poster'>
                    <img src={item.poster} alt="film poster" />
                </div>
                <div className='entertainment-title'>
                    <h4>{item.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default EntertainmentCard
