import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleCompHeader } from './actions';

import './index.css';

class TitleHeader extends Component {
  render() {
    const classNameTitleHeader = "titleheader titleheader-" + this.props.name;
    return(
      <div className={classNameTitleHeader} onClick={this.props.onClick}>
        <div className="text-wrapper">
          <h2 className="title text-center">{this.props.name}</h2>
        </div>
        <i className={this.props.icon}></i>
      </div>
    );
  }
}

TitleHeader.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(toggleCompHeader(props.name))
  }
});

export default connect(null, mapDispatchToProps)(TitleHeader);
