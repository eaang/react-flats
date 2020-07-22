import React, { Component } from 'react';

class FlatList extends Component {
  renderList = () => {
    const { flats } = this.props;
    const { selectFlat } = this.props;
    return flats.map(flat =>
    <Flat key={flat.name} selectFlat={selectFlat} />
    );
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.gifs.map((gif) => {         return <Gif key={gif.id} id={gif.id} />;       })}
    </div>

export default FlatList;

