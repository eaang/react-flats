import React, { Component } from 'react';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.gifs.map((flat) => {
        return <Flat key={gif.id} id={gif.id} />;       })}
    </div>

export default FlatList;

