import React, { Component } from 'react';
import flats from "../../data/flats";

class Flat extends Component {
  // handleClick = () => {
  //   const { selectGif } = this.props;
  //   const { id } = this.props;
  //   selectGif(id);
  // }

  render () {
    // const { id } = this.props;
    // const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <div className="card">
        <div className="card-user"></div>
        <div className="card-category"></div>
      </div>
    );
  }
}

export default Flat;
