import React from "react";
import "babel-polyfill";
import Ionicon from "react-ionicons";
import HomeButton from "./HomeButton";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";

class Header extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const leftButton = (
      <Fade>
        <Ionicon
          icon={this.props.icon}
          color="#222831"
          fontSize="2.5em"
          beat={false}
          // onClick={() => this.handleRoute("/")}
          className="left-button"
        />
      </Fade>
    );

    return (
      <React.Fragment>
        <div className="title_container">
          {this.props.buttonsHidden ? null : leftButton}
          <Fade>
            <h1 className="title-name">{this.props.title}</h1>
          </Fade>
            {this.props.buttonsHidden ? null : <HomeButton />}
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
