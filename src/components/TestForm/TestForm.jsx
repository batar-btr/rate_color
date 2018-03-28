import React, { Component } from 'react';
import './TestForm.css';
class TestForm extends Component {
    submitHandler = (e) => {
        e.preventDefault();
        const {_title, _color} = this.refs;
        this.props.onNewColor && this.props.onNewColor(_title.value, _color.value);
        _title.value ="";
        _color.value="#000000";
        _title.focus();
    }
    render() { 
        return ( 
            <form className="TestForm" onSubmit={this.submitHandler}>
                <input type="text" ref="_title" required/>
                <input type="color" ref="_color" required/>
                <button>Button</button>
            </form>
         )
    }
}
 
export default TestForm;