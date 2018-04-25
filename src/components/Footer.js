import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Button } from "react-bootstrap";

class Footer extends React.Component {
  state = {};

  handleRoute = (route) => {
    this.props.history.push(`/${route}/`);
  } 

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
        <div className="footer">
          {" "}
          Created in <b> 2018 </b> by &nbsp;
          <br />
          <b>
            <p id="footer_name">
              Nicholas Vincent-Hill &nbsp;
            </p>
          </b>
        </div>
    );
  }
}

export default Footer;
