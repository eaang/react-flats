import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats } = props;
  const { selectedFlatCoords } = props;
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return <Flat info={flat} key={flat.name} id={index} selectFlat={selectedFlatCoords} />;
      })}
    </div>
  );
};

export default FlatList;
