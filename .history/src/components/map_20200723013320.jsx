import React from 'react';
import Marker from './marker';

const FlatList = (props) => {
  const { flats } = props;
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return <Flat info={flat} key={flat.name} id={index} />;
      })}
    </div>
  );
};

export default FlatList;
