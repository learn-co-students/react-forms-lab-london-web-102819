import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange = {e => this.handleChange(e)} value = {this.state.message}/>
        <p>You have {this.props.maxChars - this.state.message.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
