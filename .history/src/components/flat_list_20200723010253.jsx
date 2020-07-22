import React, { Component } from 'react';

class FlatList extends Component {
  renderList = () => {
    const { flats } = this.props;
    const { selectFlat } = this.props;
    return gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
