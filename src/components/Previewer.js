import React, { Component } from 'react';
import ComponentHeader from './ComponentHeader';

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePreviewer: true
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState( state => ({
      togglePreviewer: !state.togglePreviewer
    }));
  }

  render() {
    const togPreviewer = 
      this.state.togglePreviewer ? 'previewer' : 'previewer maximized';
    const togPreviewerIcon =
      this.state.togglePreviewer ? 'fas fa-chevron-down' : 'fas fa-minus';
      
    return(
      <div id="previewer" className="col-md-12">
        <ComponentHeader 
          name='Previewer'
          onClick={this.toggle}
          icon={togPreviewerIcon}
        />
        <div id="preview" 
          className={togPreviewer}
          dangerouslySetInnerHTML={this.props.data}>
        </div>
      </div>
    );
  }
}

export default Previewer;
