import React from "react";

class LoginForm extends React.Component {
  
  state = {
    handleLogin: this.props.handleLogin,
    username: "",
    password: ""
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: `${e.target.value}`
    });
  }

  onSubmit = e => {
    e.preventDefault();
    console.log([this.state.username, this.state.password])
    if (this.state.username && this.state.password) {
      this.state.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <div>
          <label>
            Username
            <input 
              id="username" name="username" 
              type="text"
              value={this.state.username} 
              onChange={e => this.handleInputChange(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" name="password" 
            type="password"
            value={this.state.password} 
            onChange={e => this.handleInputChange(e)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
