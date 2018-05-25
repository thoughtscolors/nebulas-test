import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap'
import { onButtonClick } from './functions/nebpaytest'

class App extends Component {

  //Query the result of the transaction. queryPayInfo returns a Promise object.

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button onClick={() => onButtonClick()} style={{fontSize: "1.5em"}} > NebPay </Button>
        </p>
      </div>
    );
  }
}

export default App;
