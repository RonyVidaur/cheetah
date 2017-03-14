const toolbarOptions =[
  ['bold', 'italic'],['code-block'],['formula']
]

const quill = new Quill('#editor', {
    modules: {
      
      syntax: true,              // Include syntax module
      toolbar: toolbarOptions // Include button in toolbar
    },
    theme: 'snow'
  });
