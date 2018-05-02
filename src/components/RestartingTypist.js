import React from "react";
import Typist from "react-typist";

class RestartingTypist extends React.Component {
  state = { typing: true };
  done = () => {
    this.setState({ typing: false }, () => {
      setTimeout(
        () => this.setState({ typing: true }),
        this.props.timeout || 500
      );
    });
  };
  render() {
    const { children, timeout, ...props } = this.props;
    return this.state.typing ? (
      <Typist {...props} onTypingDone={this.done}>
        {children}
      </Typist>
    ) : '';
  }
}

export default RestartingTypist;
