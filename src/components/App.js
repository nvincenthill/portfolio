import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Button, Carousel } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import TitleCard from "./TitleCard";
import ImageCarousel from "./ImageCarousel";
import NavCard from "./NavCard";
import { Collapse } from "react-collapse";
import { Fade, Zoom, Slide, Flip } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketch";
import Ionicon from "react-ionicons";
import GithubCorner from "react-github-corner";
import RestartingTypist from "./RestartingTypist";

class App extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const style = {
      color: "red",
      opacity: 0.5
    };

    const cursor = {
      show: false,
      blink: true,
      element: "|",
      hideWhenDone: true,
      hideWhenDoneDelay: 500
    };
    return (
      <React.Fragment>
        {/* <Header /> */}
          <TitleCard />
          <NavCard handleRoute={this.handleRoute} />
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div>
                <Slide left>
                  <div className="about-headshot-container">
                    <img
                      className="about-headshot"
                      alt="did not load"
                      src="../images/headshot.png"
                    />

                    <div className="about-blurb">
                      <RestartingTypist
                        avgTypingDelay={20}
                        startDelay={500}
                        cursor={cursor}
                      >
                        <Highlight language="javascript">
{`let Nick = function() {
  let aboutMe = {
    skills: ["react", "CSS", "Git", "JS"],
    activities: ["hiking", "cooking food",`}<Typist.Backspace count={7} delay={500} />{` amazing meals"]
  };
  for (let i = 0; i < this.aboutMe.skills.length; i++) {
     alert("Work harder and always keep learning!");
  }
  const objective = "Find a fufilling job";
  return objective ? "Profit!" : "FizzBuzz?!";
  };`}
                          

                        </Highlight>
                      </RestartingTypist>
                    </div>
                  </div>
                </Slide>
                <Zoom cascade>
                  <div>
                    <h2 className="about-tagline">
                      {" "}
                      I'm an aspiring developer <br /> building beautiful
                      web applications.{" "}
                    </h2>
                  </div>
                </Zoom>
              </div>
            </Col>
          </Row>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
