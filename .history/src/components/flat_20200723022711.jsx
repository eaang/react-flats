import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat } = this.props;
    const { coords } = info.lat;
    selectFlat(id);
  }

  render() {
    const { info } = this.props;
    return (
      <div 
        className="card"
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${info.imageUrl})`}}
        onClick={this.handleClick}
      >
        <div className="card-category">{info.price} {info.priceCurrency}</div>
        <div className="card-description">
          <h2>{info.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
