import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleCompHeader } from '../actions/index';

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

ComponentHeader.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(toggleCompHeader(props.name, true))
    }
  }
}

export default connect(null, mapDispatchToProps)(ComponentHeader);
