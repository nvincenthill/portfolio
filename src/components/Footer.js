import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Button } from "react-bootstrap";

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
      <div className={this.state.hidden ? "footer animated fadeOut" : "footer animated fadeIn"}>
        {" "}
        Created in <b> 2018 </b> by &nbsp;
        <br />
        <b>
          <p id="footer_name">Nicholas Vincent-Hill &nbsp;</p>
        </b>
      </div>
    );
  }
}

export default Footer;
