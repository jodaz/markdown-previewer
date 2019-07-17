import React from 'react';
import Visor from './components/Visor';
import TitleHeader from '../TitleHeader';

import './index.css';

const Previewer = () => {
  return(
    <div id="previewer" className="col-md-6">
      <TitleHeader
        name="previewer"
      />
      <Visor />
    </div>
  );
}

export default Previewer;
