import React, {Component, useState} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import axios from 'axios';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Button = props => {

  return (
    <button
      onClick={() => {
        props.history.push('/');
        axios.post('http://api.haochuan.io/login', {
          "username": "today",
          "password": "20210614"
        })
        .then(response => {
          console.log(response.statusText);
        })
        .catch(err => console.log(err));
        }}>
      Login
    </button>
  );
};

const WithRouterButton = withRouter(Button);

/* Login component */
const Login = props => {
  console.log(props);

  return (
    <div>
      <h2>Login</h2>
      <WithRouterButton />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
