import React, { Component } from 'react';

class FlatList extends Component {
  renderList = () => {
    const { flats } = this.props;
    const { selectFlat } = this.props;
    return flats.map((flat, index) => <Flat id={gif.id} key={gif.id} selectGif={selectGif} />);
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
