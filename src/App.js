import React, { Component } from 'react';
import Photos from './components/Photos';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Photos />
      </div>
    );
  }
}

export default App;
