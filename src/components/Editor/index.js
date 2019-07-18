import React from 'react';
import TitleHeader from '../TitleHeader';
import TextArea from './components/TextArea';

import './index.css'

const Editor = () => {
  return(
    <div id="editor" className="col-md-6">
      <TitleHeader name="editor"/>
      <TextArea />
    </div>
  );
}

export default Editor;