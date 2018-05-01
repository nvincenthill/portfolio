import React from "react";
import Typist from "react-typist";
import Highlight from "react-highlight";
import { Fade, Zoom } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import { Button, Carousel } from "react-bootstrap";

class ImageCarousel extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
        <div className="title_image_container">
        <Carousel interval={10000} controls={false}>
          <Carousel.Item>
            <img alt="did not load" src="../images/nick.jpeg" />
            <Carousel.Caption id="carousel-caption">
              <h3>Hi, I'm Nick!</h3>
              <p>
                Welcome to my site.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="did not load" src="../images/nick.png" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="did not load" src="../images/nick.jpeg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    );
  }
}

export default ImageCarousel;
