import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

function Hello( props ) {
  return <h2>{ props.message }</h2>;
}

const Saludo = ( props ) => <h2>{ props.title }</h2>;

class App extends Component  {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Saludo title="React" />
          <Hello message="Hola Mundo" />
        </header>
      </div>
    );
  }
}

export default App;
