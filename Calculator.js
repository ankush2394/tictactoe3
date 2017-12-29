import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import MyButton from './MyButton';

class Calculator extends Component {
  constructor(props) {
    super(props);
  //every component has a state which stores the json file like a key value pa
    this.state = {
      board:["*","/","+","-"],
      answer:"",
      input1:"",
      input2:""
  }
}

  whenClick(buttonId) {
    var input1 = this.state.input1;
    var input2 = this.state.input2;

    if(input1=="" || input2=="")
      alert("missing input numbers");
    else{
      input1 = parseInt(input1);
      input2 = parseInt(input2);
      if(buttonId==0) {
            this.setState({answer:input1*input2});
        }
        else if(buttonId==1) {
            this.setState({answer:input1/input2});
        }
        else if(buttonId==2) {
            this.setState({answer:input1+input2});
        }
        else if(buttonId==3) {
            this.setState({answer:input1-input2});
        }
       var Firebase = require('firebase');
        var opRef = Firebase.database().ref('operations');
        var newOpRef = opRef.push();
        newOpRef.set({
            input1:input1,
            inpu2:input2,
            answer:this.state.answer
        });
    }
  }
  render() {
    var board = this.state.board;
    return (
      <body bgcolor="	#FFE4C4">
      <div className="App">
        Enter 1 number: <input type = "text" id="input1" style={{width:200}} value={this.state.input1} onChange={(e)=>{
          this.setState({input1:e.target.value});
        }}></input>
        <br />
        Enter 2 number: <input type = "text" id="input2" style={{width:200}} value={this.state.input2} onChange={(e)=>{
            this.setState({input2:e.target.value});
        }}></input>
        <br />
        Result------------:     <input type = "text" style={{width:200}} value={this.state.answer}></input>
        <br />
        <br />
        <br />

        <MyButton clickFunc={()=>{this.whenClick(0);}}>{board[0]}</MyButton>
        <MyButton clickFunc={()=>{this.whenClick(1);}}>{board[1]}</MyButton>
        <MyButton clickFunc={()=>{this.whenClick(2);}}>{board[2]}</MyButton>
        <MyButton clickFunc={()=>{this.whenClick(3);}}>{board[3]}</MyButton>


      </div>
      </body>
    );
  }
}

export default Calculator;
