import React from "react";

// external components
import { GoogleApiWrapper } from "google-maps-react";

// internal components
import GoogleMap from "./GoogleMap";

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: "100vw",
      height: "50vh",
      align: "center"
    };
    return (
      <div className="map-container" style={style}>
          <GoogleMap
            key={this.props.mapType}
            style={this.props.style}
            mapType={this.props.mapType}
            google={this.props.google}
          />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2XN8SPcbYQLyfKHgltf9Oa91c6KN8dk8"
})(MapContainer);
