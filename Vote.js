import React, { Component} from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: "0", name: "stack overflow", like: 0, dislike:0, url: 'https://stackoverflow.com/' },
        { id: "1", name: "youtube", like: 0, dislike:0, url: 'https://www.youtube.com/' },
        { id: "2", name: "google", like: 0, dislike: 0, url: 'https://www.google.com/' }
      ],
      website: ''
    }
  }


  handleVote = (index) => {
    this.setState(state => {
      const newItems = [...state.data];
      newItems[index].like = newItems[index].like + 0.5;
      return {data: newItems};
  })
  };

  handleUnVote = (index) => {
    this.setState(state => {
      const newItems = [...state.data];
      newItems[index].dislike = newItems[index].dislike - 0.5;
      return {data: newItems};
    })
  }

  handleInputChange = e => {
    this.setState({website: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(this.state.website);
    const newUrl = this.state.website;
    let newName = this.state.website;
    newName = newName.split('.')[0].replace('https://','');
    this.setState({ data: this.state.data.concat({id: "3", name: newName, like: 0, dislike: 0, url: newUrl}) });
  };

  

  render() {
    return (
      <div>
        <label>
          <ul>
            {this.state.data.map(web => (
              <li key={web.id}>
                {web.name} | <a href={web.url}>{web.name}</a> |
                (Like: {web.like})
                <button onClick={() => this.handleVote(web.id)}> Like </button> |
                (Dislike: {web.dislike})
                <button onClick={() => this.handleUnVote(web.id)}> Dislike </button>
                <br />
              </li>
            ))}
          </ul>
        
        <form onSubmit={this.handleSubmit}>
          <div>
          <input type='text' value={this.state.website} onChange={this.handleInputChange} />
          <input type='submit' value='Create Website'/>
          </div>
        </form>
        </label>
      </div>
    );
  }
}
export default App;
