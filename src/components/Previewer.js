import React, { Component } from 'react';
import ComponentHeader from './ComponentHeader';

import marked from 'marked';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Previewer extends Component {
  compileMarkdown() {
    let markdown = marked(this.props.rawText, {sanitize: true})

    return {__html: markdown}
  }

  render() {
    return(
      <div id="previewer" className="col-md-12">
        <ComponentHeader
          name="previewer"
        />
        <div id="preview" 
          className={"previewer"}
          dangerouslySetInnerHTML={this.compileMarkdown()}
        />
      </div>
    );
  }
}

Previewer.propTypes = {
  rawText: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  rawText: state.placeholder
});

export default connect(mapStateToProps, null)(Previewer);
