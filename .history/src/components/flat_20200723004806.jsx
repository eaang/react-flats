import React, { Component } from 'react';

class Flat extends Component {
  // handleClick = () => {
  //   const { selectGif } = this.props;
  //   const { id } = this.props;
  //   selectGif(id);
  // }

  render() {
    if (!this.props) {
      return null
    }
    const { flat } = this.props;
    return (
      <div className="card" style>
        <div className="card-user"></div>
        <div className="card-category"></div>
        <div className="card-description">{flat.name}</div>
        <div className="card-link"></div>
      </div>
    );
  }
}

export default Flat;
