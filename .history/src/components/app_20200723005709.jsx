import React, { Component } from 'react';
import flats from "../../data/flats";
import FlatList from "./flat_list";
import Flat from './flat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    };

  }

  render = () => {
    const { flats } = this.state;
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
        <div className="map-container">

        </div>
      </div>
    );
  }
}

export default App;
