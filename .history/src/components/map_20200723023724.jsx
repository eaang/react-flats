import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker"></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

  render() {
    const { coordinates } = this.props;
    const { lat } = coordinates[0];
    const { lng } = coordinates[1];
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD30p8Sio1CzO_aUdA32INbuZqEACL4twg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={lat}
            lng={lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
