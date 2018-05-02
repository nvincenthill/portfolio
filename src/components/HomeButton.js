import React from "react";
import Ionicon from "react-ionicons";
import { Link } from 'react-router-dom'

class HomeButton extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(route);
  };

  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <Link to="/">
        <Ionicon
          icon="md-home"
          color="#EEEEEE"
          fontSize="3em"
          beat={false}
          // onClick={() => this.handleRoute("/")}
          className="home-button"
        />
      </Link>
    );
  }
}
export default HomeButton;
