import React from 'react';

class Marker extends React.Component {
  if (!this.props) {
    return null
  }
  render() {
    return <div className="marker" />;
  }
}

export default Marker;
