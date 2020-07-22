import React, { Component } from 'react';

class FlatList extends Component {
  renderList = () => {
    const { flats } = this.props;
    const { selectFlat } = this.props;
    return flats.map(flat =>
    <Flat key={gif.id} selectGif={selectGif} />
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

export default FlatList;
