import React, { Component } from 'react';
import TitleHeader from '../TitleHeader/TitleHeader';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updatePlaceholder } from './EditorActions';

import './Editor.css'

class Editor extends Component {
  
  handleChange(event) {
    // Update placeholder
    let input = event.target.value;
    this.props.updatePlaceholder(input);
  };

  componentDidMount() {
    // Load ls and update placeholder
    if (localStorage.markdown) {
      this.props.updatePlaceholder(localStorage.markdown);
    }
  }

  render() {
    // const maximized = this.props.maximized ? 'editor maximized' : 'editor';

    return(
      <div id="editor" className="col-md-6">
        <TitleHeader name="editor"/>
        <textarea className="editor"
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