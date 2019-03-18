import React, { Component } from 'react';

class ComponentHeader extends Component {
  render() {
    return(
      <div className="bar-toggle" onClick={this.props.onClick}>
        <div className="text-wrapper">
          <h2 className="text-center">{this.props.name}</h2>
        </div>
        <i className={this.props.icon}></i>
      </div>
    );
  }
}

export default ComponentHeader;
