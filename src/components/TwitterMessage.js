import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: "",
    remainingChars: 280
  };

  handleMessageChange = event => {
    this.setState(previousState => {
      return {
        message: event.target.value,
        remainingChars: previousState.remainingChars - event.target.value.length
      };
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={event => this.handleMessageChange(event)}
        />
        <span>{this.state.remainingChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
