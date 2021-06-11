import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={timer: 0, auth: false}
  }

  startTime = () => {
    this.time = setInterval(this.startCount, 1000);
    this.setState({auth: true});

  }

  stopTime = () => {
    clearInterval(this.time);
    this.setState({auth: false});
  }

  startCount = () => {
    this.setState({timer: this.state.timer+1});
  }

  resetTime = () => {
    this.setState({timer: 0});
  }

  render() {
    const {timer, auth} = this.state;
    return (
      <div>
      {timer}
      <br />
      <button onClick={auth ? this.stopTime : this.startTime}>{auth ? 'Stop' : 'Start'}</button>
      <button onClick={this.resetTime}>Reset</button>
    </div>
    )
    
  }
}

export default App;
