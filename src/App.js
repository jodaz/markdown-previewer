import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import AppHeader from './components/AppHeader';
import Editor from './components/Editor';
import ComponentHeader from './components/ComponentHeader';
import Previewer from './components/Previewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      toggleEditor: true,
      togglePreviewer: true
    };

    this.toggleEditor = this.toggleEditor.bind(this);
    this.togglePreviewer = this.togglePreviewer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }

  toggleEditor() {
    this.setState( state => ({
      toggleEditor: !state.toggleEditor
    }));
  }

  togglePreviewer() {
    this.setState( state => ({
      togglePreviewer: !state.togglePreviewer
    }));
  }
  
  getRawHtml() {
    let rawHtml = marked(this.state.markdown, {sanitize: true});
    return { __html: rawHtml };
  }

  render() {
    const togEditor = 
      this.state.toggleEditor ? 'editor' : 'editor maximized';
    const togPreviewer = 
      this.state.togglePreviewer ? 'previewer' : 'previewer maximized';
    const togEditorIcon =
      this.state.toggleEditor ? 'fas fa-chevron-down' : 'fas fa-minus';
    const togPreviewerIcon =
      this.state.togglePreviewer ? 'fas fa-chevron-down' : 'fas fa-minus';

    return (
      <div className="container h-100">
        <AppHeader />
        <div className="row h-75 align-items-center">
          <Editor
            markdown={this.state.markdown}
            onChange={this.handleChange}
            toggle={this.toggleEditor}
            componentStyles={togEditor}
            icon={togEditorIcon}
          />
          <Previewer 
            data={this.getRawHtml()} 
            toggle={this.togglePreviewer}
            componentStyles={togPreviewer}
            icon={togPreviewerIcon}
          />
        </div>
      </div>
    );
  }
};

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`

export default App;
