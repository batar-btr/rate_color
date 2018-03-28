import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TestForm from './components/TestForm/TestForm'
import ColorList from './components/ColorList/ColorList'
import { v4 } from 'uuid'
import MemberList from './components/MemberList/MemberList'

class App extends Component {

  state = {
    colors: [
      {
        "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
        "title": "ocean at dusk",
        "color": "#00c4e2",
        "rating": 5
      },
      {
        "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
        "title": "lawn",
        "color": "#26ac56",
        "rating": 3
      },
      {
        "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
        "title": "bright red",
        "color": "#ff0000",
        "rating": 0
      }
    ]
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
        <MemberList count={200} />

      </div>
    );
  }
}

export default App;
