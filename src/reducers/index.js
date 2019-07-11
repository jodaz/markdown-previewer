import chnToggler from '../utils/chnToggler';
import { UPDATE_PLACEHOLDER, TOGGLE_COMP_HEADER } from '../actions/types';

const placeholder = 
`# Welcome to my Markdown Previewer!

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

![React Logo w/ Text](./awesome.gif)`

const toggle = {
  'editor': false,
  'previewer': false
}

const initialState = {
  placeholder,
  toggle
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLACEHOLDER:
      return {
        ...state,
        placeholder: action.payload,
      }
    case TOGGLE_COMP_HEADER:
      // Trigger a toggler update
      
      return {
        ...state,
        toggle: chnToggler(toggle, action.payload)
      }
    default:
      return state;
  }
};
