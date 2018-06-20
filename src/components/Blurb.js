import React from "react";

// external components
import { Fade } from "react-reveal";
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
              <Typist
                avgTypingDelay={20}
                stdTypingDelay={10}
                startDelay={500}
                cursor={cursor}
              >
                <pre>
                  <code className="about-blurb-code">
                    {`let Nick = function() {
    let aboutMe = {
      skills: ['JS', 'CSS', 'Git', 'react', 'trading'],
      activities: ['hiking', 'cooking food','amazing meals']
    };
    for (let i = 0; i < this.aboutMe.skills.length; i++) {
      alert('Work harder and always keep learning!');
    }
    const objective = 'Find a fufilling job';
    return objective ? 'Profit!' : 'FizzBuzz?!';
  };`}
                  </code>
                </pre>
              </Typist>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Blurb;
