import React from 'react';
import logo from './assets/antiguru.svg';
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="AntiGuru" title="AntiGuru" />
      </header>
    </div>
  );
}

export default App;
