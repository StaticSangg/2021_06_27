import "./App.css";
import React, { Component } from "react";
import Contents from './components/Contents.js';
import Subject from './components/Subject.js';
import TOC from './components/TOC.js';


class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      subject : {title : "WEB", sub : "world wide web"},
      contents: [
        {id : 1, title : "HTML", desc : "HTML is for information"},
        {id : 2, title : "CSS", desc : "CSS is for design"},
        {id : 3, title : "JavaScript", desc : "JavaScript is for interactive"}
      ]
    }
  }
  render () {
    return (
      <div className="App">
        <Subject title = {this.state.subject.title} 
        sub = {this.state.subject.sub}>          
        </Subject>

        <TOC data = {this.state.contents}></TOC>
        
        <Contents title ="HTML" 
        desc = "HTML is Hyper Text MarkUp Language">
        </Contents>      

      </div>
    );
  }
}

export default App;