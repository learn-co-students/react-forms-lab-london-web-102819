import React from "react";


class TwitterMessage extends React.Component {

  // state = {
  //   charRemains: this.props.maxChars
  // }

  // handleCharCount = event => {
  //   let curChars = event.target.value; 
  //   this.setState(previousState => {
  //    return{
  //     charRemains: this.props.maxChars - curChars.length
  //    }  
  //   }
  //   )
  // }

  state = {
    message: ''
  }

  handleMsgChange = event => {
    this.setState({
      message: event.target.value
    })
  }
  handleSubmit = event => {
    // event.persist();
    event.preventDefault();
    this.setState({
      // charRemains: this.props.maxChars
      message:''
    });
    event.target.elements[0].value = ''; 
  }
  render() {
    // console.log(this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        {/* <form onSubmit={this.handleSubmit}>  */}
          {/* <input 
            type="text" 
            name="message" 
            id="message"
            maxLength={this.state.charRemains} 
            onChange={this.handleCount}
            /> */}
          <input
            type="text"
            name='message'
            id='message'
            value={this.state.message}
            onChange={this.handleMsgChange}
          />
          <h5> There are {this.props.maxChars - this.state.message.length} characters left</h5>
            
          {/* <input type='submit' /> */}
        {/* </form> */}
      </div>
    );
  }
}

export default TwitterMessage;
