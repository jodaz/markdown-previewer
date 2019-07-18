import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePlaceholder } from '../../actions';

class TextArea extends Component {
  handleChange(event) {
    this.props.updatePlaceholder( event.target.value );
  };

  componentDidMount() {
    if (localStorage.markdown) {
      this.props.updatePlaceholder(localStorage.markdown);
    }
  }

  render() {
    return(
      <textarea className="editor"
        value={this.props.rawText}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

TextArea.propTypes = {
  rawText: PropTypes.string.isRequired,
  updatePlaceholder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  rawText: state.text.placeholder
});

export default connect(mapStateToProps, { updatePlaceholder })(TextArea);
