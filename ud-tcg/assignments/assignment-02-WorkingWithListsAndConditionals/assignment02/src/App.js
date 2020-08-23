import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationDisplay from './Validation/ValidationDisplay';
import LengthValidator from './Validation/LengthValidator';
import AnswerValidator from './Validation/AnswerValidator';
import Char from './Char/Char';

class App extends Component {

  validator = AnswerValidator;

  state = {
    currentText: "Random"
  }

  textChangedHandler = (event) => {
    let newText = event.target.value;
    this.setState({
      currentText: newText
    });
  }

  removeFromTextByIndex = (text, index) => {
    let first = text.substring(0, index);
    let last = text.substring(index+1);
    return first + last;
  }

  charClickedHandler = (pos) => {
    let newText = this.removeFromTextByIndex(this.state.currentText, pos);
    this.setState({
      currentText: newText
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 02</h1>
        <br />
        <input onChange={this.textChangedHandler} value={this.state.currentText}/>
        <p>Length: {this.state.currentText.length}</p>
        <ValidationDisplay text={this.state.currentText} validator={this.validator} />
        {this.state.currentText.split('').map((c, pos) => <Char char={c} clicked={() => this.charClickedHandler(pos)}/>)}
      </div>
    );
  }
}

export default App;
