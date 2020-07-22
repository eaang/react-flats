import React, { Component } from 'react';
import flats from "../../data/flats";
import FlatList from "./flat_list";
import SimpleMap from "./map";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: flats,
      selectedFlatCoords: null,
    };
  }

  selectFlat = (coords) => {
    this.setState({
      selectedFlatCoords: coords
    });
  }

  render = () => {
    const { list } = this.state;
    const { selectedFlatCoords } = this.state;
    return (
      <div>
        <FlatList flats={list} selectFlat={this.selectFlat} />
        <div className="map-container">
          <SimpleMap selectFlat={selectedFlatCoords} />
        </div>
      </div>
    );
  }
}

export default App;
