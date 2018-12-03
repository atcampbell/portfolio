import React, { Component } from 'react';
import Content from './components/Content';
import data from './data/data.json'
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div>
        <Content data={data}/>
      </div>
    );
  }
}

export default App;
