import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";

class AboutMe extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const cursor = {
      show: false,
      blink: true,
      hideWhenDone: true,
      hideWhenDoneDelay: 0
    };

    function learnAboutNick() {
      let nicholasVincentHill = {
        objective: "find a fufilling job",
        skills: ["react.js", "HTML5/CSS/JS", "node.js", "Git", "ballin"],
        projects: [
          {
            name: "Meal Panda",
            description: "A meal planning app and grocery list generator",
            link: "https://mealpanda.herokuapp.com/"
          }
        ]
      };
      return nicholasVincentHill;
    }

    function learnAboutAndy() {
      let nicholasVincentHill = {
        objective: "find a fufilling job",
        skills: ["react.js", "HTML5/CSS/JS", "node.js", "Git", "ballin"],
        projects: [
          {
            name: "Meal Panda",
            description: "A meal planning app and grocery list generator",
            link: "https://mealpanda.herokuapp.com/"
          }
        ]
      };
      return nicholasVincentHill;
    }

    let functionString = "" + learnAboutNick;
    let functionString2 = "" + learnAboutAndy;
    return (
      <React.Fragment>
        <Typist avgTypingDelay={10}>
          <div>
            <Highlight language="javascript" className="test" {...cursor}>
              {functionString}
            </Highlight>
          </div>
        </Typist>
        <Typist avgTypingDelay={10}>
          <div>
            <Highlight language="javascript" className="test">
              {functionString2}
            </Highlight>
          </div>
        </Typist>
      </React.Fragment>
    );
  }
}

export default AboutMe;
