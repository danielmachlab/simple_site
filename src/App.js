import React from 'react';
import logo from './logo.svg';
import herbiePicture from './herbie.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={herbiePicture} className="App-logo" alt="logo" />
        <p>
          Hello family!
        </p>
        <a
          className="App-link"
          href="https://bit.ly/39hn9FM"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Pictures :)
        </a>
      </header>
    </div>
  );
}

export default App;
