import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

class App extends Component {
  render() {
    return (
      <div className="container h-100">
        <AppHeader />
        <div className="row h-75 align-items-center">
          <Editor />
          <Previewer />
        </div>
      </div>
    );
  }
};

export default App;
