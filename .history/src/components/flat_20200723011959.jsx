import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    const { info } = this.props;

    this.state = {
      list: flats
    };
  }
  // handleClick = () => {
  //   const { selectGif } = this.props;
  //   const { id } = this.props;
  //   selectGif(id);
  // }

  render() {
    return (
      <div className="card" style={{backgroundImage: `url(${flat.imageUrl})`}}>
        <div className="card-user"></div>
        <div className="card-category"></div>
        <div className="card-description">{flat.name}</div>
        <div className="card-link"></div>
      </div>
    );
  }
}

export default Flat;
