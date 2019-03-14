(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=(n(16),n(5)),s=n(6),c=n(9),d=n(7),m=n(10),g=n(1),u=(n(18),n(8)),h=n.n(u),w=function(e){return o.a.createElement("div",{id:"editor",className:"col-md-12"},o.a.createElement(v,{name:"Editor",onClick:e.toggle,icon:e.icon}),o.a.createElement("textarea",{id:"editor",className:e.componentStyles,value:e.markdown,onChange:e.onChange}))},f=function(e){return o.a.createElement("div",{id:"previewer",className:"col-md-12"},o.a.createElement(v,{name:"Previewer",onClick:e.toggle,icon:e.icon}),o.a.createElement("div",{id:"preview",className:e.componentStyles,dangerouslySetInnerHTML:e.data}))},v=function(e){return o.a.createElement("div",{className:"bar-toggle",onClick:e.onClick},o.a.createElement("div",{className:"text-wrapper"},o.a.createElement("h2",{className:"text-center"},e.name)),o.a.createElement("i",{className:e.icon}))},E=function(){return o.a.createElement("div",{className:"col header"},o.a.createElement("h1",{className:"text-center"},"Markdown Previewer"))},b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={markdown:k,toggleEditor:!0,togglePreviewer:!0},n.toggleEditor=n.toggleEditor.bind(Object(g.a)(Object(g.a)(n))),n.togglePreviewer=n.togglePreviewer.bind(Object(g.a)(Object(g.a)(n))),n.handleChange=n.handleChange.bind(Object(g.a)(Object(g.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"toggleEditor",value:function(){this.setState(function(e){return{toggleEditor:!e.toggleEditor}})}},{key:"togglePreviewer",value:function(){this.setState(function(e){return{togglePreviewer:!e.togglePreviewer}})}},{key:"getRawHtml",value:function(){return{__html:h()(this.state.markdown,{sanitize:!0})}}},{key:"render",value:function(){var e=this.state.toggleEditor?"editor":"editor maximized",t=this.state.togglePreviewer?"previewer":"previewer maximized",n=this.state.toggleEditor?"fas fa-chevron-down":"fas fa-minus",a=this.state.togglePreviewer?"fas fa-chevron-down":"fas fa-minus";return o.a.createElement("div",{className:"container h-100"},o.a.createElement(E,null),o.a.createElement("div",{className:"row h-75 align-items-center"},o.a.createElement(w,{markdown:this.state.markdown,onChange:this.handleChange,toggle:this.toggleEditor,componentStyles:e,icon:n}),o.a.createElement(f,{data:this.getRawHtml(),toggle:this.togglePreviewer,componentStyles:t,icon:a})))}}]),t}(a.Component),k="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHere's some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)",y=b;i.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.30add634.chunk.js.map