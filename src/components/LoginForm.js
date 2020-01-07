import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = e => {
    e.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit = {e => this.login(e)}> 
        <div>
          <label>
            Username
            <input onChange = {e => this.handleChange(e)} id="username" name="username" type="text" value = {this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange = {e => this.handleChange(e)} id="password" name="password" type="password" value = {this.state.password}/>
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
