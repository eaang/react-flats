import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: name,
      selectedGifId: "1RgJ939wcJWsU"
    };
  }

  // handleClick = () => {
  //   const { selectGif } = this.props;
  //   const { id } = this.props;
  //   selectGif(id);
  // }

  render () {
    // const { id } = this.props;
    // const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <div className="card" style>
        <div className="card-user"></div>
        <div className="card-category"></div>
        <div className="card-description"></div>
        <div className="card-link"></div>
      </div>
    );
  }
}

export default Flat;
