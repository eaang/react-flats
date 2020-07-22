import React, { Component } from 'react';
import flats from "../../data/flats";
import FlatList from "./flat_list";
import SimpleMap from "./map";

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
        <SimpleMap />
      </div>
    );
  }
}

export default App;
