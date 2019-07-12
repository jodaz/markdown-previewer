import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppHeader from './components/AppHeader/AppHeader';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import AppFooter from './components/AppFooter/AppFooter';

// Import frontend, static files...
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import configureStore from './store';

const App = () => {
  return (
    <div className="container h-100">
      <AppHeader />
      <div className="row h-75 align-items-center">
        <Editor />
        <Previewer />
      </div>
      <AppFooter />
    </div>
  );
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
