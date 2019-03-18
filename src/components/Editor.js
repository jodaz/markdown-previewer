import React, { Component } from 'react';
import ComponentHeader from './ComponentHeader';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEditor: true
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState( state => ({
      toggleEditor: !state.toggleEditor
    }));
  }

  render() {
    const togEditor = 
      this.state.toggleEditor ? 'editor' : 'editor maximized';
    const togEditorIcon =
      this.state.toggleEditor ? 'fas fa-chevron-down' : 'fas fa-minus';

    return(
      <div id="editor" className="col-md-12">
        <ComponentHeader
          name={'Editor'}
          onClick={this.toggle}
          icon={togEditorIcon}
        />
        <textarea id="editor" className={togEditor}
          value={this.props.markdown}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
};

export default Editor;
