import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
    maxChars: this.props.maxChars,
    type: "text",
    message: ''
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type={this.state.type} name="message" id="message" value={this.state.message} onChange={e => this.setState({message: e.target.value})}/>
        <p>remaining characters: {this.state.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;