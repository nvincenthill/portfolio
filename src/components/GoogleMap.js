import React from "react";

// external components
import { Map } from "google-maps-react";

export class GoogleMap extends React.Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    this.setState({
      mapType: nextProps.mapType
    });
  }

  render() {
    // const stylesOrange = ;

    // const styles = ;
    // const flag = (
    //   <Ionicon
    //     icon="ios-flag"
    //     color="#EEEEEE"
    //     fontSize="3em"
    //     beat={false}
    //     // onClick={() => this.changeMap()}
    //     className="map-flag"
    //   />)

    const map = (
      <Map
        className="map"
        styles={this.props.style[this.props.mapType]}
        google={this.props.google}
        terrain={true}
        initialCenter={{
          lat: 37.831428,
          lng: -122.252635
        }}
        zoom={9}
        mapTypeControl={false}
        scaleControl={false}
        zoomControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        mapType={"terrain"}
      />
    );

    return <div className="map-holder">{map}</div>;
  }
}

export default GoogleMap;
