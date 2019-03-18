import React, { Component } from 'react';
import ComponentHeader from './ComponentHeader';

class Previewer extends Component {
  render() {
    return(
      <div id="previewer" className="col-md-12">
        <ComponentHeader name='Previewer' onClick={this.props.toggle} icon={this.props.icon}/>
        <div id="preview" 
          className={this.props.componentStyles}
          dangerouslySetInnerHTML={this.props.data}>
        </div>
      </div>
    );
  }
}

export default Previewer;
