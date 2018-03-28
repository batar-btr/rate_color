import React from 'react';
import './Member.css'

const Member = ({ email, picture, name, location, remove }) => {
    return (
        <div className='Member'>
            <img src={picture.thumbnail} alt="" />
            <div>
                <h1 style={{ textTransform: 'Capitalize' }}>{name.first} {name.last}</h1>
                <p><a href={"mailto:" + email}>{email}</a></p>
                <p>{location.city}, {location.state}</p>
            </div>
            <button className="CloseButton" onClick={remove}>X</button>
        </div>
    )
}

export default Member;