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
    const maximized = this.props.maximized ? 'previewer maximized' : 'previewer';

    return(
      <div id="previewer" className="col-md-6">
        <ComponentHeader
          name="previewer"
        />
        <div
          className={maximized}
          dangerouslySetInnerHTML={this.compileMarkdown()}
        />
      </div>
    );
  }
}

Previewer.propTypes = {
  rawText: PropTypes.string.isRequired,
  maximized: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  rawText: state.placeholder,
  maximized: state.toggle.previewer
});

export default connect(mapStateToProps, null)(Previewer);
