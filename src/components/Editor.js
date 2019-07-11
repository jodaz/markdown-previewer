import React, { Component } from 'react';
import ComponentHeader from './ComponentHeader';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updatePlaceholder } from '../actions/index';

class Editor extends Component {
  handleChange(event) {
    let input = event.target.value;
    this.props.updatePlaceholder(input);
  };

  componentDidMount() {
    if (localStorage.markdown) {
      this.props.updatePlaceholder(localStorage.markdown);
    }
  }

  render() {
    const maximized = this.props.maximized ? 'editor maximized' : 'editor';

    return(
      <div id="editor" className="col-md-12">
        <ComponentHeader
          name='editor'
        />
        <textarea id="editor" className={maximized}
          value={this.props.rawText}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  rawText: PropTypes.string.isRequired,
  updatePlaceholder: PropTypes.func.isRequired,
  maximized: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  rawText: state.placeholder,
  maximized: state.toggle.editor
});

export default connect(mapStateToProps, { updatePlaceholder })(Editor);
