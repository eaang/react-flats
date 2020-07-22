import React, { Component } from 'react';
import flats from "../../data/flats";
import FlatList from "./flat_list";
import SimpleMap from "./map";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: flats,
      selectedFlatId: null,
    };
  }

  selectFlat = (id) => {
    this.setState({
      selectedFlatId: id
    });
  }

  render = () => {
    const { list } = this.state;
    const { selectedFlatId } = this.state;
    return (
      <div>
        <FlatList flats={list} />
        <div className="map-container">
          <SimpleMap selectFlat={selectedFlatId} />
        </div>
      </div>
    );
  }
}

export default App;
