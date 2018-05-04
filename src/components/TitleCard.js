import React from "react";
import "babel-polyfill";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";

class TitleCard extends React.Component {
  state = {
    hidden: false
  };

  handleScroll = event => {
    console.log(
      window.scrollY,
      window.innerHeight,
      window.screenTop,
      window.screenY
    );

    // let elementTarget = document.getElementById("title_name");
    // console.log(elementTarget.offsetTop, window.scrollY);
    if (window.scrollY > 0) {
      this.setState({
        hidden: true
      });
    } else {
      this.setState({
        hidden: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Row
          middle="xs" className={this.state.hidden ? "title_container" : "title_container"}
        >
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="title_name">
            <Fade>
              <h1>Nicholas Vincent-Hill</h1>
              </Fade>
            </div>
            {/* <div id="title_desc">
              <Col xs={12} sm={4} md={4} lg={4}>
                <h2>Trader</h2>
              </Col>
              <Col xs={12} sm={4} md={4} lg={4}>
                <h2>Developer</h2>
              </Col>
              <Col xs={12} sm={4} md={4} lg={4}>
                <h2>Flâneur</h2>
              </Col>
            </div> */}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TitleCard;
