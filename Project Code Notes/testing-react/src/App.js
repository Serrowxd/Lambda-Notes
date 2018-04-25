import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState({ count: ++this.state.count });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
