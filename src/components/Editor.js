import React, { Component } from 'react';
import ComponentHeader from './ComponentHeader';

class Editor extends Component {
  render() {
    return(
      <div id="editor" className="col-md-12">
        <ComponentHeader name={'Editor'} onClick={this.props.toggle} icon={this.props.icon}/>
        <textarea id="editor" className={this.props.componentStyles}
          value={this.props.markdown}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
};

export default Editor;
