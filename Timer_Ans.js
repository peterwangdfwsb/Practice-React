import React from 'react';

class App extends React.Component {  
  constructor(props) {
    super(props);    
    this.state = {
      number: 0,
      isCounting: false
    };  
  }  
  
  clickHandler = () => {
    if (this.state.isCounting) {
      this.setState({ isCounting: false });
      clearInterval(this.timer);
    } else {
      this.setState({ isCounting: true });
      this.timer = setInterval(() => {
        this.setState((state) => ({ number: state.number + 1 }));}, 1000);
      }  
    }
    
  resetHandler = () => {
    this.setState({
      number: 0, 
      isCounting: false
    });
    clearInterval(this.timer);  
  }  
  
  componentWillUnmount() {    
    clearInterval(this.timer);  
  }  
  
  render() {    
    return (      
    <div>        
      <div>{this.state.number}</div>       
      <button onClick={this.clickHandler}>{this.state.isCounting ? "STOP" : "START"}</button>       
      <button onClick={this.resetHandler}>RESET</button>      
      </div>    
      );  
    }
  }

export default App;
