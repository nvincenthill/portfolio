import { GoogleApiWrapper } from "google-maps-react";
import GoogleMap from "./GoogleMap";
import React from "react";

export class MapContainer extends React.Component {
  render() {
    const style = {
          width: '100vw',
          height: '40vh',
          position: "inline",
          align: "center"
        }
    return (
      <div className="map-container" style={style}>
        <GoogleMap key={this.props.mapType} style={this.props.style} mapType={this.props.mapType}  google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2XN8SPcbYQLyfKHgltf9Oa91c6KN8dk8"
})(MapContainer);
