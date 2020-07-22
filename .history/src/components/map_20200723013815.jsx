import React from 'react';
import marker from './marker';

const Map = (props) => {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return <Flat info={flat} key={flat.name} id={index} />;
      })}
    </div>
  );
};

export default Map;
