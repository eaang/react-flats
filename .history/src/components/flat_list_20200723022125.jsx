import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats } = props;
  const { selectFlat } = props;
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return <Flat info={flat} key={flat.name} id={index} selectFlat={} />;
      })}
    </div>
  );
};

export default FlatList;
