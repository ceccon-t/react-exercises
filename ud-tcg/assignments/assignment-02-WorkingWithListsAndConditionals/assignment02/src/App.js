import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    currentText: ""
  }

  textChangedHandler = (event) => {
    let newText = event.target.value;
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
        <ValidationComponent textLength={this.state.currentText.length} />
        {this.state.currentText.split('').map((c, pos) => <CharComponent char={c} clicked={() => console.log(pos + ' clicked')}/>)}
      </div>
    );
  }
}

export default App;
