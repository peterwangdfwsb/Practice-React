import { useState } from "react";
import axios from "axios";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      username,
      password
    };

    axios.post("http://api.haochuan.io/login", payload)
      .then(res => {
        localStorage.setItem("authenticated", "true");
        history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <label>username: </label>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <label>password: </label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Login;
