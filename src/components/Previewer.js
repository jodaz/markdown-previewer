import React from 'react';
import ComponentHeader from './ComponentHeader';

const Previewer = (props) => {
  return(
    <div id="previewer" className="col-md-12">
      <ComponentHeader name='Previewer' onClick={props.toggle} icon={props.icon}/>
      <div id="preview" 
        className={props.componentStyles}
        dangerouslySetInnerHTML={props.data}>
      </div>
    </div>
  );
}

export default Previewer;
