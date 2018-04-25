import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { Collapse } from "react-collapse";
import Zoom from "react-reveal/Zoom";
import { Grid, Row, Col } from "react-flexbox-grid";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketch";

// import Footer from "./Footer";

class App extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header />
        <Collapse isOpened={!this.props.footerHidden}>
          <Zoom>
            <Row id="title_container">
              <Col xs={12} sm={12} md={12} lg={12}>
                <div id="title_name">
                  <h1 className="animated fadeIn">Nicholas Vincent-Hill</h1>
                </div>
                <h2 id="title_desc">Developer | Designer | Creator</h2>
              </Col>
            </Row>
          </Zoom>
        </Collapse>
        <Zoom>
          <div className="sketch_container">
            <P5Wrapper sketch={sketch} />
          </div>
        </Zoom>
        <Zoom>
          <Footer />
        </Zoom>
      </React.Fragment>
    );
  }
}

export default App;
