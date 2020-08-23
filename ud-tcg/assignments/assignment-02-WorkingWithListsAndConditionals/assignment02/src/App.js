import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

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
        <Validation textLength={this.state.currentText.length} />
        {this.state.currentText.split('').map((c, pos) => <Char char={c} clicked={() => this.charClickedHandler(pos)}/>)}
      </div>
    );
  }
}

export default App;
