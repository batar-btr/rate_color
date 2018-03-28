import React, { Component } from 'react';
import StarRating from '../../StarRating/StarRating'
import './Color.css'

class Color extends Component {
    componentWillMount() {
        this.style = { backgroundColor: 'black' }
    }
    shouldComponentUpdate(nextProps) {
        const { rating } = this.props
        return rating !== nextProps.rating
    }
    componentWillUpdate(nextProps, nextState) {
        this.style = null
    }
    componentDidUpdate(prevProps, prevState) {
        const { title, rating } = this.props
        const status = rating > prevProps.rating ? 'BETTER))' : "WORSE(("
        console.log(`Color${title} is getting ${status}`);
    }
    render() {
        const { title, color, rating = 4, remove = f => f, rate = f => f } = this.props
        return (
            <div className='Color' style={this.style}>
                <p>{title}</p>
                <div className='ColorBlock' style={{ backgroundColor: color }}></div>
                <StarRating starsSelected={rating} onRate={rate} />
                <button className="CloseButton" onClick={remove}>X</button>
            </div>
        )
    }
}

export default Color;

