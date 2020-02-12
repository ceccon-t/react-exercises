import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    "username": "Joe"
  }

  userNameChangedHandler = ( newName ) => {
    this.setState({
      "username": newName
    });
  }

  render() {
    return (
      <div>
        <h1>Assignment 01</h1>
        <hr />
        <UserInput />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
