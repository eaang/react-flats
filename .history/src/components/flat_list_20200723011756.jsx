import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats } = this.props;
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return <Flat info={flat} key={flat.name} id={flat.index} />;
      })}
    </div>
  );
};

export default FlatList;
