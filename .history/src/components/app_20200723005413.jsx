import React, { Component } from 'react';
import flats from "../../data/flats";
import Fl
import Flat from './flat';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render = () => {
    return (
      <div>
        <div className="flat-list">

        </div>
        <div className="map-container">

        </div>
      </div>
    );
  }
}

export default App;
