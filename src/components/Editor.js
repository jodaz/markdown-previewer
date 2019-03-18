import React from 'react';
import ComponentHeader from './ComponentHeader';

const Editor = (props) => {
  return(
    <div id="editor" className="col-md-12">
      <ComponentHeader name={'Editor'} onClick={props.toggle} icon={props.icon}/>
      <textarea id="editor" className={props.componentStyles}
        value={props.markdown}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Editor;
