import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: "",
    remainingChars: this.props.maxChars
  };

  handleMessage = event => {
    //event.persist();
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
          onChange={event => this.handleMessage(event)}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
        <h4>{this.state.remainingChars}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
