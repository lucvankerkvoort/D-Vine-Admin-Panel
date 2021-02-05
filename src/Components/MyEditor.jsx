import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { db, storage } from "../Firebase/Firebase";

class MyEditor extends Component {
  state = {
    editorState: undefined,
    article: undefined,
    title: "",
    image: undefined
  }

  onEditorStateChange: function = (editorState) => {
    this.setState({
      editorState,
      article: draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
    });

  };
  handlePost = () => {
    const uploadTask = storage.ref(`images/${this.state.image?.name}`).put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url)
            db.collection("article").add({
              title: this.state.title,
              imageUrl: url,
              article: this.state.article
            })
            alert("DONE");
          })
      }
    );
    
  }
  handleTitle = e => {
    this.setState({
      title: e.target.value
    })
  }
  handleImage = e => {
    this.setState({
      image: e.target.files[0]
    })
  }
  render() {
    const { editorState } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Title:</label>
        <input type="text" value={this.title} onChange={this.handleTitle} />
        <label>Image:</label>
        <input type="file" onChange={this.handleImage} />
        <div style={{ border: "1px solid lightgray", backgroundColor: "#EBEBE4", padding: "5px", marginBottom: "5px" }}>
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        {/* <textarea
          disabled
           value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
           style={{marginBottom:"5px"}}
        /> */}
        <button onClick={this.handlePost} style={{ padding: "5px" }}>Submit</button>
      </div>
    );
  }
}

export default MyEditor;