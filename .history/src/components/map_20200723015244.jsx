import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.key = ;
  }

  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;