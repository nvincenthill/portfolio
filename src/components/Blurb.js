import React from "react";
import RestartingTypist from "./RestartingTypist";
import { Fade, Zoom, Slide, Flip } from "react-reveal";
import Typist from "react-typist";
import Highlight from "react-highlight";

class Blurb extends React.Component {
  state = {};

  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const cursor = {
      show: false,
      blink: true,
      element: "|",
      hideWhenDone: true,
      hideWhenDoneDelay: 500
    };
    return (
      <div>
        <Fade>
          <div className="about-headshot-container">
            <img
              className="about-headshot"
              alt="did not load"
              src="../images/headshot.png"
            />

            <div className="about-blurb">
              <RestartingTypist
                avgTypingDelay={20}
                stdTypingDelay={10}
                startDelay={500}
                cursor={cursor}
              >
                <Highlight className="about-blurb-code" language="javascript">
{`let Nick = function() {
    let aboutMe = {
      skills: ["react", "CSS", "Git", "JS"],
      activities: ["hiking", "cooking food",`}
                  <Typist.Backspace count={7} delay={500} />
      {` amazing meals"]
    };
    for (let i = 0; i < this.aboutMe.skills.length; i++) {
      alert("Work harder and always keep learning!");
    }
    const objective = "Find a fufilling job";
    return objective ? "Profit!" : "FizzBuzz?!";
  };`}<Typist.Backspace count={1} delay={5000} />
                </Highlight>
              </RestartingTypist>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Blurb;
