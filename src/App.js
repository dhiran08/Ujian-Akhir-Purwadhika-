import React, { Component } from 'react';
import Jam from './component/Jam';
import Gambar1 from './component/Gambar/Coba5.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Gambar1} className="Gambar1" alt="Gambar1" />
          <Jam />
        </header>
      </div>
    );
  }
}

export default App;
