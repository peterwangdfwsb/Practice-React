import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import React from 'react';
import axios from 'axios';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


const Problem1 = (props) => (
  <div>
    <h1>Problem 1</h1>
  </div>  
);

const Problem2 = (props) => (
  <div>
    <h1>Problem 2</h1>
  </div>  
);

const Problem3 = (props) => (
  <div>
    <h1>Problem 3</h1>
  </div>  
);

const Problem4 = (props) => (
  <div>
    <h1>Problem 4</h1>
  </div>  
);

const Problem5 = (props) => (
  <div>
    <h1>Problem 5</h1>
  </div>  
);



function List(props) {
  const newUrl = '/' + props.id
  return (
    <li>
      <Link to={newUrl}>{props.title}</Link>
    </li>
  );
}


/* NotFound component */
const NotFound = () => (
  <div>
    <h2>404: The page doesn't exist.</h2>
  </div>
);




/* App component */
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      problems: []
    };
  }

  componentDidMount() {
    axios
    .get('http://api.haochuan.io/oj/problems')
    .then(response => {
      this.setState({problems: response.data.questions});
      console.log(this.state.problems);
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    //const data = this.state.problems;
    const {problems} = this.state;
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {this.state.problems.map((item, index) => {
                return <List id={item.id} {...item} />;
              })}
            </ul>
          </nav>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path='/1fdqFNRMco' component={Problem1} />
            <Route path='/Rp6i1IAs6i' component={Problem2} />
            <Route path='/azkbcVGiyU' component={Problem3} />
            <Route path='/7FRihtm7wj' component={Problem4} />
            <Route path='/V8gQqoVzzp' component={Problem5} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
