import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardExampleGroups from './components/Cards'
import Splash from './components/Splash'

class App extends Component {

  //Query the result of the transaction. queryPayInfo returns a Promise object.

  render() {
    return (
      <div>
      <Splash/>
        <div><CardExampleGroups /></div>
      </div>
    );
  }
}

export default App;
