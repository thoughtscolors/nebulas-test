import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardGroup from './components/Cards'
import Splash from './components/Splash'
import { getMessages } from './functions/chatTest'
import TextField from './components/TextField'

class App extends Component {



  render() {
    const textField = {
       'verticleAlign': 'middle',
       left: '50px',
       background: 'transparent',
       width: '50%'
      }

    return (
      <div>
      <Splash />
      <div style={textField}>

        <TextField/>

      </div>
      <CardGroup />
      </div>
    );
  }
}

export default App;
