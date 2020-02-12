import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    "username": "Joe"
  }

  userNameChangedHandler = ( event ) => {
    this.setState({
      "username": event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h1 className="App-title">Assignment 01</h1>
        </div>
        <UserInput inputChangeHandler={this.userNameChangedHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
