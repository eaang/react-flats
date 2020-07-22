import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

  render() {
    const mapKeys = { key: process.env.AIzaSyD30p8Sio1CzO_aUdA32INbuZqEACL4twg, language: 'en', }
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapKeys }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
