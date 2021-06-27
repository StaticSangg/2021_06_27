import React, { Component } from "react";
import "../App.css";

class Subject extends Component {
  
  render () {
    return (
      <div>
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </div>
    );
  }
}

export default Subject;