import React, { Component } from 'react';
import Person from './Components/person';


class App extends Component {

  render() {
    return (
      <div>
        <Person name='Sajad' family='Mousavi' />
      </div>
    );
  }
}

export default App;
