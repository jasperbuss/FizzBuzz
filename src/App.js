import React, { Component } from "react";

import "./App.css";
import FizzBuzz from "./components/fizzbuzz";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container" />
        <FizzBuzz />
      </div>
    );
  }
}

export default App;
