import React from 'react'
import ReactQuill from 'react-quill'


const Composer = React.createClass({
  modules: {
    syntax: true,
    formula: true,
    toolbar: [
     [{ header: [1, 2, false] }],
     ['bold', 'italic', 'underline'],
     ['image', 'code-block','formula']
   ]
  },

   formats: [
     'header',
     'bold', 'italic', 'underline', 'strike', 'blockquote',
     'list', 'bullet', 'indent',
     'link', 'image', 'code-block' ,'formula'
   ],

   render: function() {
     return (
       <div className="text-editor">
         <ReactQuill theme="snow"
                     modules={this.modules}
                     formats={this.formats}>
           <div key="editor"
                 ref="editor"
                 className="quill-contents my-class-name"
                 />
         </ReactQuill>
       </div>
     );
   },

 });


export default Composer
