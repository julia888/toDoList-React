import React, { Component } from 'react';
import InputForm from './components/InputForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
            <div>
                <h1>My To Do List</h1>
            </div>
        </header>
        <InputForm/>
      </div>
    );
  }
}

export default App;
