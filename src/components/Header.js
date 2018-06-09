import React from "react";

// external components
import "babel-polyfill";
import Ionicon from "react-ionicons";
import HomeButton from "./HomeButton";
import { Fade } from "react-reveal";

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
          color="#eeeeee"
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
          {this.props.buttonsHidden ? <span /> : leftButton}
          <Fade>
            <h1 className="title-name">{this.props.title}</h1>
          </Fade>
            {this.props.buttonsHidden ? <span /> : <HomeButton />}
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
