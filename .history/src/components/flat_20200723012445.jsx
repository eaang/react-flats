import React, { Component } from 'react';

class Flat extends Component {
  // handleClick = () => {
  //   const { selectGif } = this.props;
  //   const { id } = this.props;
  //   selectGif(id);
  // }

  render() {
    const { info } = this.props;
    return (
      <div className="card" style={{backgroundImage: `url(${info.imageUrl})`}}>
        <div className="card-category">{info.price} {info.currency}</div>
        <div className="card-description"><h2>{info.name}</h2></div>
        <div className="card-link"></div>
      </div>
    );
  }
}

export default Flat;
