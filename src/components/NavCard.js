import React from "react";
import "babel-polyfill";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";

class NavCard extends React.Component {
  state = {
    hidden: true
  };

  handleScroll = event => {
    // let elementTarget = document.getElementById("title_name");
    // console.log(elementTarget.offsetTop, window.scrollY);
    if (
      window.scrollY > window.innerHeight / 3 &&
      window.scrollY < window.innerHeight / 2
    ) {
      this.setState({
        hidden: false
      });
    } else {
      this.setState({
        hidden: true
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
      <Fade cascade>
      <div>
        <Row around="xs" className={this.state.hidden ? "nav_container" : "nav_container"}>
          <Col className="nav-column" xs={5} sm={3} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("AboutMe")}
            >
              ABOUT
            </button>
          </Col>
          <Col className="nav-column" xs={5} sm={3} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("Projects")}
            >
              PROJECTS
            </button>
          </Col>
          <Col className="nav-column" xs={5} sm={3} md={3} lg={3}>
            <a href="/images/Nicholas W. Vincent-Hill Resume 05-04-2018.pdf"><button
              className="nav_button">
              RESUME
            </button>
            </a>
          </Col>
          <Col className="nav-column" xs={5} sm={3} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("Contact")}
            >
              CONTACT
            </button>
          </Col>
        </Row>
        </div>
      </Fade>
    );
  }
}

export default NavCard;
