import React, { Component } from 'react';
import Visor from './components/Visor';
import TitleHeader from '../TitleHeader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Previewer extends Component {

  render() {
    const col = this.props.compState ? 'col-md-4' : 'col-md-6';

    return(
      <div id="previewer" className={col}>
        <TitleHeader name="previewer" />
        <Visor />
      </div>
    );
  }
}

Previewer.propTypes = {
  compState: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  compState: state.toggle.titleHeader.previewer
});

export default connect(mapStateToProps, null)(Previewer);