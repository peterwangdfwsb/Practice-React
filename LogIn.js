import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);    
    this.state = { username: "", password: "", showMessage: null };    
    this.crendentials = { today: "20210605", omorrow: "20210606", yesterday: "20210604" };
  }
  
  handleSubmit = e => {
    e.preventDefault();    
    const { username, password } = this.state;    
    if (this.crendentials[username] === password) {
      this.setState({ showMessage: "You are logged in. Welcome back." });
    } else {
      this.setState({ showMessage: "Your username or/and password don't match." });
    }
  }
  
  render() {
    const { username, password, showMessage } = this.state;
    return (
      <>
      {showMessage && <div>{showMessage}</div>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input name="username" id="username" value={username} onChange={e => this.setState({ username: e.target.value })}/>          
          <label htmlFor="password">Password: </label>          
          <input type="password" name="password" id="password" value={password} onChange={e => this.setState({ password: e.target.value })}/>          
          <button type="submit">Log in</button>        
        </form>      
      </>    
        );  
    }
}

```
