import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
      charsLeft: 280
    };
  }

  tweetHandler = (e) => {
    if (e.target.value.length < this.props.maxChars){
      this.setState({
        tweet: e.target.value, 
        charsLeft: this.props.maxChars - e.target.value.length
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={e => this.tweetHandler(e)} value={this.state.tweet} type="text" name="message" id="message" />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
