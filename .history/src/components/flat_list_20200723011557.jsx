import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats } = props;
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return <Flat key={gif.id} id={gif.id} />;
      })}
    </div>
  );
};

export default FlatList;
