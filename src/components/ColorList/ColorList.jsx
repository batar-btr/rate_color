import React from 'react'
import Color from './Color/Color'
import './ColorList.css'

const ColorList = ({ colors = [], remove = f => f, rate = f => f }) => {
    return (
        <div className='ColorList'>
            {(colors.length === 0) ? <p>Color List empty, please add a color</p> :
                colors.map(color => <Color key={color.id} {...color} remove={() => remove(color.id)} rate={(rating) => rate(color.id, rating)} />)}
        </div>
    )
}

export default ColorList;