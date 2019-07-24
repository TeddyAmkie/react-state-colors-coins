import React, { Component } from 'react';
import Grid from './Grid.js';

class App extends Component {
  randomBoxes = Math.floor(Math.random()*100);
  render() {
    return (
      <div id="App" className="container">
          <Grid boxCount={this.randomBoxes}/>
      </div>
    );
  }
}

export default App;
