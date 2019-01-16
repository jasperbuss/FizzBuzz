import React from "react";
import fizzHOC from "../hoc/fizzing";

class FizzBuzz extends React.Component {
  state = {
    length: 31
  };

  fizz = value => (value % 3 === 0 ? `Fizz` : ``);

  buzz = value => (value % 5 === 0 ? `Buzz` : ``);

  fizzbuzz = () =>
    Array.from(Array(this.state.length).keys())
      .slice(1, this.state.length)
      .map(value => (
        <div key={value}>{this.fizz(value) + this.buzz(value) || value}</div>
      ));

  render() {
    return (
      <div className="col-sm-12 text-center">
        <span style={{ color: "red" }}>FizzBuzz!</span>
        <span>{this.fizzbuzz()}</span>
      </div>
    );
  }
}

export default fizzHOC(FizzBuzz);
