import React from 'react';
import PropTypes from 'prop-types';
import './Star.css'
const Star = ({ selected = false, onClick = f => f }) => {
    return (
        <div
            className={selected ? "Star selected" : "Star"}
            onClick={onClick}>

        </div>
    )
}
Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}
export default Star;