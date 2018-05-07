import { GoogleApiWrapper } from "google-maps-react";
import GoogleMap from "./GoogleMap";
import React from "react";

export class MapContainer extends React.Component {
  render() {
    const style = {
          width: '100vw',
          height: '50vh',
          position: "inline",
          align: "center"
        }
    return (
      <div className="map-container" style={style}>
        <div className="contact-greeting-container"> 
          <h2 className="contact-greeting-heading">Greetings! </h2> 
          <p className="contact-greeting-body"> I'd love to talk to you! <br /> Please send me an email <br /> and I'll get back to you <br /> as soon as possible.</p>
          <h2 className="contact-greeting-footer"> -Nick </h2> 
        </div>
        <GoogleMap key={this.props.mapType} style={this.props.style} mapType={this.props.mapType}  google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2XN8SPcbYQLyfKHgltf9Oa91c6KN8dk8"
})(MapContainer);
