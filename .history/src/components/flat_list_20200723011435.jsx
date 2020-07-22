import React from 'react';

const FlatList = (props) => {
  const { flat } = props;
  return (
    <div className="flat-list">
      {flat.gifs.map((flat) => {
        return <Flat key={gif.id} id={gif.id} />;
      })}
    </div>
  );
};

export default FlatList;
