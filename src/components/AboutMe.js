import React from "react";

// external components
import "babel-polyfill";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
import Header from "./Header";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";

class AboutMe extends React.Component {
  state = {};

  changeColor = () => {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header title="About Me" icon="md-person" />

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div>
              <Fade cascade>
                <div>
                  <p className="about-description">
                    I'm a full-stack software engineer who enjoys building
                    scalable, responsive, mobile-first web applications.
                  </p>
                  <p className="about-description">
                    In a prior life as a trader, I hedged interest rate risk for
                    mortgage originators with mortgage-backed securities. I've
                    also traded commodities, equities, and derivatives. As a
                    developer, I use my capital markets experience to identify
                    and solve business problems with beautiful web applications.
                  </p>
                  <p className="about-description">
                    When I’m not on the job, I enjoy traveling the world and
                    urban gardening with my girlfriend Melody.
                  </p>

                  <p className="about-description">
                    I have experience working with: React, MongoDB, Express,
                    Node.js, Git, Docker, Webpack, SQL, HTML5/CSS/JS, AWS (S3,
                    EC2, Route 53, CloudFront), Jest/Enzyme, Mocha/Chai, Redux,
                    jQuery, Heroku, CircleCI, p5.js, SQLite, MySQL, PostgresSQL,
                    Grunt, and Linux.
                  </p>

                  <p className="about-description">
                    <span className="about-hook">
                      I'd love to work with you and add value to your firm.
                    </span>
                  </p>

                  <div className="about-contact">
                    <Link to="/Contact/">
                      <Ionicon
                        icon="ios-contact"
                        color="#222831"
                        fontSize="5em"
                        beat={false}
                        // onClick={() => this.handleRoute("/")}
                        className="about-contact-button"
                      />

                      <p className="about-contact"> Hire me! </p>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AboutMe;
