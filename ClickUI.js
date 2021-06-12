import React, { Component, useState } from 'react';
import axios from 'axios';

function List(props) {
  const imageStyle = { width: 100, height: 100 };

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [followers, setFollowers] = useState('');
  const [Following, setFollowing] = useState('');

  function handleClick() {
    let newUrl = 'https://api.github.com/users/';
    newUrl += props.login;
    axios({ method: 'get', url: newUrl})
      .then(response => {
        console.log(response.data);
        setFollowers(() => response.data.followers);
        setFollowing(() => response.data.following);
        setName(() => response.data.login);
        setLocation(() => response.data.location);

      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <tr onClick={() => handleClick()}>
      <td>{props.id}</td>
      <td>{props.login}</td>
      <td>
        <img style={imageStyle} src={props.avatar_url} alt={props.avatar_url} />
      </td>
      <div>
      {followers} 
      <br />
      {name} 
      <br />
      {location} 
      <br />
      {Following}
      </div> 
    </tr>
    
  );
}

const ShowDetail = (props) => {
  console.log(props);
  return <div>
    <h1>{props.id}</h1>
    <h1>{props.login}</h1>
    <h1>Hello</h1>
  </div>
}



class App extends Component {
  constructor(props) {
    super(props);
    // remember that you have to initialize
    // the same data type for the result you want to get in state
    this.state = { data: [] };
  }
  componentDidMount() {
    // componentDidMount is the right place to get some data to render the page
    axios({ method: 'get', url: 'https://api.github.com/users' })
      .then(response => {
        console.log(response);
        this.setState({ data: response.data });
        console.log(this.state.data[0]);
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  showDetail = (index) => {
    console.log('test');
  }

  
  render() {
    return (
      <div>
      <table>
        <thead>
          <tr >
            <th>ID</th>
            <th>username</th>
            <th>image</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item, index) => {
            return <List key={item.id} {...item} />;
          })}
        </tbody>
      </table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      </div>
    );
  }
}
export default App;
