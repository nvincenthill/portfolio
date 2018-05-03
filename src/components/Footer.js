import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Button } from "react-bootstrap";
import { Fade, Zoom, Slide, Flip } from "react-reveal";

class Footer extends React.Component {
  state = {
    hidden: false
  };

  handleScroll = event => {
    let elementTarget = document.getElementById("footer_name");
    if (
      window.scrollY >
      elementTarget.offsetTop + elementTarget.offsetHeight - 200
    ) {
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
    window.addEventListener(
      "scroll", this.handleScroll);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <Fade>
      <div className={"footer"}>
          <p id="footer_name">Copyright © 2018 Nicholas Vincent-Hill</p>
      </div>
      </Fade>
    );
  }
}

export default Footer;
