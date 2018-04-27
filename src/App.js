import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { db } from './firebase.js'

class App extends Component {
  handleClick = () => {
    const now = new Date();

    db.ref(`/messages/${now.getTime()}`).set({
      user: 'Лукьянов Вячеслав',
      message: 'Привет!',
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
