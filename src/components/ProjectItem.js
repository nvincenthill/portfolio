import React from "react";
import Typist from "react-typist";
import Highlight from "react-highlight";
import { Fade, Zoom } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";

class ProjectItem extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
            <div className="project">
              <a href="https://mealpanda.herokuapp.com/">
              <img
                className="project_image"
                src="../images/mealpanda.png"
                alt="Did not load"
              />
              <h2 className="project_title"> Meal Panda </h2>
              </a>
              <h3 className="project_description">
                {" "}
                Menu planner & <br /> grocery list generator{" "}
              </h3>
              <p> Built with <br /> React | Firebase | Jest | Node.js </p>
              <a href="https://github.com/nvincenthill/mealpanda">
                <Ionicon icon="logo-github" color="#202020" fontSize="3em" beat={false}/>
              </a>
              <a href="https://mealpanda.herokuapp.com/"><Ionicon icon="md-eye" color="#202020" fontSize="3em" beat={false}/></a>
            </div>
    );
  }
}

export default ProjectItem;
