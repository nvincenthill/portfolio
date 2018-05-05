import React from "react";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import HomeButton from "./HomeButton";
import { Collapse } from "react-collapse";
import { Well } from "react-bootstrap";
import Footer from "./Footer";
import MapContainer from "./MapContainer";

class Contact extends React.Component {
  state = {
    title: "Contact",
    wellHidden: true,
    wellText: "",
    shake: false,
    icon: "ios-moon",
    mapType: "night",
    githubColor: "#EEEEEE",
    style: {
      night: [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            },
            {
              saturation: "-100"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36
            },
            {
              color: "#000000"
            },
            {
              lightness: 40
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off"
            },
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89"
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#222831"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#222831"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#222831"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#24282b"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }
      ],
      normal: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9"
            },
            {
              lightness: 17
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#eeeeee"
                }
              ]
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36
            },
            {
              color: "#222831"
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        }
      ]
    }
  };

  changeMap(text) {
    if (this.state.icon === "ios-sunny") {
      this.setState({ icon: "ios-moon" });
      this.setState({ mapType: "night" });
      this.setState({ githubColor: "#EEEEEE" });

    } else {
      this.setState({ icon: "ios-sunny" });
      this.setState({ mapType: "normal" });
      this.setState({ githubColor: "#222831" });
    }
  }

  handleRoute = route => {
    this.props.history.push(route);
  };

  copy() {
    const copyText = document.getElementById("contact-well-input");
    copyText.select();
    document.execCommand("Copy");
    this.deselectAll();
    this.setState({ shake: true });
    setTimeout(() => {
      this.setState({ shake: false });
    }, 750);
  }

  deselectAll() {
    var element = document.activeElement;

    if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
      if ("selectionStart" in element) {
        element.selectionEnd = element.selectionStart;
      }
      element.blur();
    }

    if (window.getSelection) {
      // All browsers, except IE <=8
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      // IE <=8
      document.selection.empty();
    }
  }

  handleClick(target) {
    if (target === "LinkedIn") {
      window.location.assign("https://www.linkedin.com/in/nvincenthill/");
    }

    if (target === "Github") {
      window.location.assign("https://github.com/nvincenthill");
    }

    if (target === "Email") {
      if (this.state.wellHidden === true) {
        this.setState({
          wellText: "nvincenthill@gmail.com",
          wellHidden: false,
          title: "nvincenthill@gmail.com"
        });
      } else {
        if (this.state.wellText === "nvincenthill@gmail.com") {
          this.setState({
            wellHidden: true,
            title: "Contact"
          });
        } else {
          this.setState({
            wellText: "nvincenthill@gmail.com"
          });
        }
      }
    }

    if (target === "Phone") {
      if (this.state.wellHidden === true) {
        this.setState({
          wellText: "(541) 602-1878",
          wellHidden: false,
          title: "(541) 602-1878"
        });
      } else {
        if (this.state.wellText === "(541) 602-1878") {
          this.setState({
            wellHidden: true,
            title: "Contact"
          });
        } else {
          this.setState({
            wellText: "(541) 602-1878"
          });
        }
      }
    }

    if (target === "Skype") {
      if (this.state.wellHidden === true) {
        this.setState({
          wellText: "nvincenthill",
          wellHidden: false,
          title: "nvincenthill"
        });
      } else {
        if (this.state.wellText === "nvincenthill") {
          this.setState({
            wellHidden: true,
            title: "Contact"
          });
        } else {
          this.setState({
            wellText: "nvincenthill"
          });
        }
      }
    }

    if (target === "Text") {
      if (this.state.wellHidden === true) {
        this.setState({
          wellText: "Please don't text me",
          wellHidden: false,
          title: ""
        });
      } else {
        if (this.state.wellText === "Please don't text me") {
          this.setState({
            wellHidden: true,
            title: "Contact"
          });
        } else {
          this.setState({
            wellText: "Please don't text me"
          });
        }
      }
    }
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const iconSize = "6em";

    const copyIcon = (
      <div className="contact-icon-copy-container">
        <Ionicon
          icon="ios-copy"
          color="#eeeeee"
          fontSize="3em"
          beat={false}
          shake={this.state.shake}
          onClick={() => this.copy()}
          // className="contact-icon-copy"
        />
      </div>
    );

    const lgSize = 12;
    const mdSize = 12;

    return (
      <React.Fragment>

      
        <Row between="xs" middle="xs" className={"title_container"}>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Fade>
              <Ionicon
                icon={this.state.icon}
                color="#EEEEEE"
                fontSize="3em"
                beat={false}
                onClick={() => this.changeMap()}
                className="contact-change-map-button"
              />
            </Fade>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8}>
            <Fade>
              <h1 className="title-name"> {this.state.title} </h1>
            </Fade>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Fade>
              <HomeButton />
            </Fade>
          </Col>
        </Row>
        <MapContainer style={this.state.style} mapType={this.state.mapType} />

        <Fade cascade>
          <Row className="contact-container">
            <Col xs={4} sm={3} md={mdSize} lg={lgSize}>
              <Ionicon
                icon="logo-github"
                color={this.state.githubColor}
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Github")}
                className="contact-icon"
              />
            </Col>

            <Col xs={4} sm={3} md={mdSize} lg={lgSize}>
              <a>
                <Ionicon
                  icon="logo-linkedin"
                  color="#0077B5"
                  fontSize={iconSize}
                  beat={false}
                  shake={false}
                  onClick={() => this.handleClick("LinkedIn")}
                  className="contact-icon"
                />
              </a>
            </Col>

            <Col xs={4} sm={mdSize} md={mdSize} lg={lgSize}>
              <Ionicon
                icon="ios-call"
                color="#01E64E"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Phone")}
                className="contact-icon"
              />
            </Col>
            <Col xs={4} sm={mdSize} md={mdSize} lg={lgSize}>
              <Ionicon
                icon="logo-skype"
                color="#00AFF0"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Skype")}
                className="contact-icon"
              />
            </Col>
            <Col xs={4} sm={mdSize} md={mdSize} lg={lgSize}>
              <Ionicon
                icon="ios-text"
                color="#01E64E"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Text")}
                className="contact-icon"
              />
            </Col>

            <Col xs={4} sm={mdSize} md={mdSize} lg={lgSize}>
              <Ionicon
                icon="ios-mail"
                color="#D64A3A"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Email")}
                className="contact-icon"
              />
            </Col>
          </Row>
        </Fade>

        <Collapse isOpened={this.state.wellHidden}>
        <div className="contact-popup">
          <p> {this.state.wellText} </p>
          {copyIcon}
        </div>
        </Collapse>

      </React.Fragment>
    );
  }
}

export default Contact;
