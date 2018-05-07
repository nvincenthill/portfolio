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
        <Row between="xs" middle="xs" className={"title_container"}>
          <Col xs={2} sm={2} md={2} lg={1} />
          <Ionicon
            icon={this.props.icon}
            color="#EEEEEE"
            fontSize="2.5em"
            beat={false}
            // onClick={() => this.handleRoute("/")}
            className="left-button"
          />
          <Col xs={6} sm={6} md={6} lg={8}>
            <Fade>
              <h1 className="title-name">{this.props.title}</h1>
            </Fade>
          </Col>
          <Col xs={2} sm={2} md={2} lg={1}>
            <Fade>
              <HomeButton />
            </Fade>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Header;
