import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <span style={this.styles} className="badge badge-primary m-2">
            {this.formatCount()}
          </span>
          <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
