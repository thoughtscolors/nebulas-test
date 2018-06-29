import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardGroup from './components/Cards'
import Splash from './components/Splash'
import { getMessages } from './functions/chatTest'

class App extends Component {



  render() {
    return (
      <div>
      <Splash />
      <CardGroup />
      </div>
    );
  }
}

export default App;
