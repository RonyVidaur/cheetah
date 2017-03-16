import React, { Component } from 'react';
import './App.css';

import ReactQuill from 'react-quill'
class App extends Component {
  modules: {
     toolbar: [
       [{ 'header': [1, 2, false] }],
       ['bold', 'italic', 'underline','strike', 'blockquote'],
       [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
       ['link', 'image'],
       ['clean']
     ],
   }

   formats: [
     'header',
     'bold', 'italic', 'underline', 'strike', 'blockquote',
     'list', 'bullet', 'indent',
     'link', 'image'
   ]

  render() {
    return (
      <div className="App">
        <div className="text-editor">
          <ReactQuill theme="snow"
                      modules={this.modules}
                      formats={this.formats}>
            <div key="editor"
                  ref="editor"
                  className="quill-contents my-class-name"
                  >
              </div>
          </ReactQuill>
        </div>
      </div>
    );
  }
}

export default App;
