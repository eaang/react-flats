import React, { Component } from 'react';
import flats from "../../data/flats";
import FlatList from "./flat_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: flats
    };
  }

  render = () => {
    const { list } = this.state;
    return (
      <div>
        <FlatList flats={list} />
        <div className="map-container">

        </div>
      </div>
    );
  }
}

export default App;
