import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TestForm from './components/TestForm/TestForm'
import ColorList from './components/ColorList/ColorList'
import { v4 } from 'uuid'
import MemberList from './components/MemberList/MemberList'

class App extends Component {

  state = {
    colors: []
  }

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({ colors });
  }

  rateColor = (id, rating) => {
    const colors = this.state.colors.map(color => {
      return color.id !== id ? color : { ...color, rating }
    })
    this.setState({ colors })
  }

  removeColor = id => {
    console.log(id);
    const colors = this.state.colors.filter(color => color.id !== id)
    this.setState({ colors })
  }

  logColor = (title, color) => {
    console.log(`New Color: ${title} | ${color}`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux</h1>
        </header>
        <TestForm onNewColor={this.addColor} />
        <ColorList colors={this.state.colors} remove={this.removeColor} rate={this.rateColor} />
        <MemberList count={200}/>

      </div>
    );
  }
}

export default App;
