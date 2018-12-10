import React, { Component } from 'react';
import Jam from './component/Jam';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Jam />
        </header>
      </div>
    );
  }
}

export default App;
