import React from "react";
import { Fade } from "react-reveal";
// import Ionicon from "react-ionicons";
import ProjectItem from "./ProjectItem";
// import HomeButton from "./HomeButton";
import Header from "./Header";

class Projects extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(route);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
      <Header title="Nick's Projects" icon="ios-folder" />


            <div className="project-array-container">
            <Fade>
                <ProjectItem
                  name="The Meal Panda"
                  imageSource="../images/mealpanda_showcase.png"
                  description="Menu planner & grocery list generator"
                  builtWith="React | CSS | Firebase | Jest | Node.js"
                  url="https://mealpanda.herokuapp.com/"
                  github="https://github.com/nvincenthill/mealpanda"
                  iconAnimation="tada"
                />
                </Fade>
                <Fade>
                <ProjectItem
                  name="Nick's Bloomberg Terminal"
                  imageSource="../images/shroomberg_showcase.png"
                  description="A Yahoo finance/Bloomberg knockoff named 'Shroomberg'"
                  builtWith="MongoDB | Express | SASS | AngularJS | Node.js"
                  url="https://shroomberg.herokuapp.com/"
                  github="https://github.com/nvincenthill/stock-quote-app"
                  iconAnimation="bounce"
                />
                </Fade>
                <Fade>
                <ProjectItem
                  name="The Next Big Thing"
                  imageSource="../images/empty_showcase.png"
                  description="This project is coming soon!"
                  builtWith="HTML5 | CSS | JS | p5.js"
                  url="https://github.com/nvincenthill"
                  github="https://github.com/nvincenthill"
                  iconAnimation="rubberBand"
                />
                </Fade>
            </div>
      </React.Fragment>
    );
  }
}

export default Projects;
