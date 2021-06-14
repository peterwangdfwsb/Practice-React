import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


const Problems = (props) => {
  const [input, setInput] = useState('');
  const [match, setMatch] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value);
    console.log(e.target.value);
    console.log(input);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);

    axios.post('http://api.haochuan.io/oj/problems/1fdqFNRMco/solution', {anwser: true})
    .then(response => {
      setMatch(response.statusText);
      console.log(response);
      console.log(match);
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Type your anwser here
        <br />
        <input
        type='text'
        value={input}
        onChange={handleInputChange}
        />
      </label>
      <br />
      <input type='submit' value="submit Anwser" />

    </form>
  </div>
  );
  };

class App extends React.Component {

  render() {
    
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path='/1fdqFNRMco' component={Problems} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
