import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form 
      onSubmit={e => {
        e.preventDefault()
        if (this.state.username !== "" && this.state.password !== "") {
          this.props.handleLogin(this.state)
        }
        }}>
        <div>
          <label>
            Username
            <input onChange={e => this.handleInputChange(e)} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={e => this.handleInputChange(e)} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
