import React, { Component } from 'react';
import RandomJoke from '../Components/RandomJoke';


class App extends Component {
  constructor() {
    super();
    this.state = {
        joke: '',
        clicked: false,
        loading: true
    }
  }

displayJoke = async() => {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ joke: data.value, loading: false });
  }

  async componentDidMount() {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ joke: data.value, loading: false });
  }

  render(){
    if (this.state.loading){
      return <div>loading...</div>;
    }

    if (this.state.joke === ''){
      return(
        <div className="tc">
          <h1>Awww snap...</h1>
          <h3>Try again next time</h3>
        </div>
      );
    }

    return(
      <div className="tc divCenter">
        <h1 className="fw4">Random Chuck Norris Joke generator</h1>
        <RandomJoke chuckJoke={this.state.joke}/>
        <button className="grow" onClick={this.displayJoke}>Generate random joke</button>
      </div>
    );
}
}

export default App;

