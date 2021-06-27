import React, { Component } from "react";
import "../App.css";

class TOC extends Component {
  
  render () {
    var lists = [];
    var data = this.props.data;
    var i = 0;

    while (i < data.length ) {
      lists.push(<li key = {data[i].id}>
        <a href={"/contents/" + data[i].id} onClick = {function(){alert(data[i].id + "번째")}}>{data[i].title}</a></li>);
      i+=1;
    }

    return (
      <div>
          <nav>
            <ul>
              {lists}
            </ul>
          </nav>
      </div>
    );
  }
}

export default TOC;