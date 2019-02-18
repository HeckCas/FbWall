import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { Home } from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import io from './images/io.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar profilePhoto={ io }/>
        <Home />
      </div>
    );
  }
}

export default App;
