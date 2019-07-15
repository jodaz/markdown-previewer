import React from 'react';

import AppHeader from './AppHeader/AppHeader';
import Editor from './Editor/Editor';
import Previewer from './Previewer/Previewer';
import AppFooter from './AppFooter/AppFooter';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <AppHeader />
      <div className="row">
        <Editor />
        <Previewer />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
