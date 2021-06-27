import './App.css';
import React, { Component } from "react";

class MyCounter extends Component {  

    constructor (props) {
        super (props);
        // Component의 생성자
        // super.constroctot()
        this.state = {
            number:0
        }
    }

    handleIncrease = () => {
        this.setState({
            number:this.state.number += 1
        })
    }

    handle2Increase = () => {
        this.setState({
            number:this.state.number += 2
        })
    }

    handle3Increase = () => {
        this.setState({
            number:this.state.number += 3
        })
    }

    

  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        값 : {this.state.number} <br/>
        <button onClick = {this.handleIncrease}>1 증가</button>
        <button onClick = {this.handle2Increase}>2 증가</button>
        <button onClick = {this.handle3Increase}>3 증가</button>
      </div>
    );
  }
}

export default MyCounter;
