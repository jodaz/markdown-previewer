import React, { Component } from 'react';
import ComponentHeader from './ComponentHeader';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updatePlaceholder } from '../actions/index';

class Editor extends Component {
  handleChange(event) {
    let input = event.target.value;
    this.props.updatePlaceholder(input);
  }

  render() {
    return(
      <div id="editor" className="col-md-12">
        <ComponentHeader
          name={'Editor'}
          icon={'fas fa-chevron-down'}
        />
        <textarea id="editor" className={'editor'}
          value={this.props.rawText}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  rawText: PropTypes.string.isRequired,
  updatePlaceholder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  rawText: state.placeholder
});

export default connect(mapStateToProps, { updatePlaceholder })(Editor);
