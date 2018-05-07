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
    return (
      <React.Fragment>
        <div className={"title_container"}>
          <Ionicon
            icon={this.props.icon}
            color="#EEEEEE"
            fontSize="2.5em"
            beat={false}
            // onClick={() => this.handleRoute("/")}
            className="left-button"
          />
            <Fade>
              <h1 className="title-name">{this.props.title}</h1>
            </Fade>
            <Fade>
              <HomeButton />
            </Fade>
            </div>
      </React.Fragment>
    );
  }
}

export default Header;
