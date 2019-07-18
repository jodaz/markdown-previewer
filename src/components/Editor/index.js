import React, { Component } from 'react';
import TitleHeader from '../TitleHeader';
import TextArea from './components/TextArea';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css'

class Editor extends Component {
  render() {
    const col = this.props.compState ? 'col-md-4' : 'col-md-6';

    return(
      <div id="editor" className={col}>
        <TitleHeader name="editor"/>
        <TextArea />
      </div>
    );
  }
}

Editor.propTypes = {
  compState: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  compState: state.toggle.titleHeader.editor
});

export default connect(mapStateToProps, null)(Editor);
