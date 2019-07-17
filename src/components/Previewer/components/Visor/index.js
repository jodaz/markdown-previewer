import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import marked from 'marked';

class Visor extends Component {
  compileMarkdown() {
    let markdown = marked(this.props.rawText, {sanitize: true})
    
    return {__html: markdown}
  }

  render() {
    return(
      <div
        className="previewer"
        dangerouslySetInnerHTML={this.compileMarkdown()}
      />
    );
  }
};

Visor.propTypes = {
  rawText: PropTypes.string.isRequired,
  maximized: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  rawText: state.text.placeholder,
  maximized: state.toggle.titleHeader.previewer
});

export default connect(mapStateToProps, null)(Visor)
