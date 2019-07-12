import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleCompHeader } from './TitleHeaderActions';

import './TitleHeader.css';

const TitleHeader = ({name, onClick, icon}) => {
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
