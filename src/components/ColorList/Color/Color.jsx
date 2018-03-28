import React from 'react'
import StarRating from '../../StarRating/StarRating'
import './Color.css'
const Color = ({ title, color, rating = 4, remove = f => f, rate = f => f }) => {
    return (
        <div className='Color'>
            <p>{title}</p>
            <div className='ColorBlock' style={{ backgroundColor: color }}></div>
            <StarRating starsSelected={rating} onRate={rate}/>
            <button className="CloseButton" onClick={remove}>X</button>
        </div>
    )
}

export default Color