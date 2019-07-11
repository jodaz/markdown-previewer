import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleCompHeader } from '../actions/index';

const ComponentHeader = ({name, onClick, icon}) => {
  // Stateless component
  return(
    <div className="bar-toggle" onClick={onClick}>
      <div className="text-wrapper">
        <h2 className="text-center">{name}</h2>
      </div>
      <i className={icon}></i>
    </div>
  );
}

ComponentHeader.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(toggleCompHeader(props.name, true))
  }
});

export default connect(null, mapDispatchToProps)(ComponentHeader);
