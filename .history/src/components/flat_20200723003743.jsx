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
    const background = `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg`;
    return (
      <div className="card">
        <div className="card-user"></div>
      </div>
    );
  }
}

export default Flat;
