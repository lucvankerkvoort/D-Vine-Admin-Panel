import React, { useState } from 'react';
import "../Styles/AddDeal.scss";
import { db, storage } from "../Firebase/Firebase";
import firebase from "firebase";
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const AddDeal = () => {
    const [image, setImage] = useState(undefined);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [progress, setProgress] = useState(0);

    const onEditorStateChange = (editorChangedState) => {
        setDescription(draftToMarkdown(convertToRaw(editorChangedState.getCurrentContent())))
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                        db.collection("deals").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            title,
                            imageUrl: url,
                            description
                        })
                        setProgress(0);
                        setTitle('');
                        setDescription('');
                        setImage(undefined);
                    })
            }
        );
    }

    return (

        <div className="add-deal">
            <form onSubmit={handleSubmit}>
                <div>
                    <progress value={progress} max="100"> {progress}% </progress>
                </div>
                <div>
                    <label for="image">Image:</label>
                    <input type="file" name="image" onChange={e => setImage(e.target.files[0])} />
                </div>
                <div>
                    <label for="title">Title:</label>
                    <input value={title} type="text" onChange={e => setTitle(e.target.value)} name="title" />
                </div>
                <div>
                    <label>Description:</label>
                    <div style={{ border: "1px solid lightgray", backgroundColor: "#EBEBE4", padding: "5px", marginBottom: "5px" }}>
                        <Editor
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={onEditorStateChange}
                        />
                    </div>
                </div>
                <button type={"submit"} >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddDeal;