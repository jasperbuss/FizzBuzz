import React, { Component } from "react";

const fizzHOC = WrappedComponent => {
  return class fizzHOC extends Component {
    render() {
      return (
        <div>
          <span style={{ fontSize: "22px" }}>
            <WrappedComponent {...this.props} />
          </span>
        </div>
      );
    }
  };
};

export default fizzHOC;
