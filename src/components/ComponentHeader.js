import React from 'react';

const ComponentHeader = (props) => {
  return(
    <div className="bar-toggle" onClick={props.onClick}>
      <div className="text-wrapper">
        <h2 className="text-center">{props.name}</h2>
      </div>
      <i className={props.icon}></i>
    </div>
  );
}

export default ComponentHeader;
