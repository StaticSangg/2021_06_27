import React, { Component } from "react";
import "../App.css";

class Content extends Component {
  
  render () {
    return (
      <div>
          <article>
            <h1>{this.props.title}</h1>
            {this.props.desc}
          </article>
      </div>
    );
  }
}

export default Content;