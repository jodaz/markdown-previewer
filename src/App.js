import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  
  getRawHtml() {
    let rawHtml = marked(this.state.value, {sanitize: true});
    return { __html: rawHtml };
  }

  render() {
    return (
      <div className="App">
        <textarea id="markdown" value={this.state.value} onChange={this.handleChange}></textarea>
        <div id="preview" dangerouslySetInnerHTML={this.getRawHtml()}></div>
      </div>
    );
  }
}

export default App;
