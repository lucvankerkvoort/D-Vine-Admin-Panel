import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class MyEditor extends Component {
  state = {
    editorState: undefined,
  }

  onEditorStateChange: function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div style={{display:"flex",flexDirection:"column"}}>
          <div style={{border:"1px solid lightgray",backgroundColor:"#EBEBE4",padding:"5px",marginBottom:"5px"}}> 
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        </div>
        <textarea
          disabled
           value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
           style={{marginBottom:"5px"}}
        />
        <button style={{padding:"5px"}}>Submit</button>
      </div>
    );
  }
}

export default MyEditor;