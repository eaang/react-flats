import React, { Component } from 'react';
import Flat from './flat';

class GifList extends Component {
  renderList = () => {
    const { gifs } = this.props;
    const { selectGif } = this.props;
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

export default GifList;
