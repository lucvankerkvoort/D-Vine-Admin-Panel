import React, { useState } from 'react';
import "../Styles/AddDeal.scss";
import {db,storage} from "../Firebase/Firebase";
import firebase from "firebase";


const AddDeal = () => {
    const [image,setImage]=useState(undefined);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [progress,setProgress]=useState(0);
    

    const handleSubmit=e=>{
        e.preventDefault();
        const uploadTask= storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                const progress=Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                );
                setProgress(progress);
            },
            (error)=>{
                console.log(error);
                alert(error.message);
            },
            ()=>{
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url=>{console.log(url)
                        db.collection("deals").add({
                            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                            title,
                            imageUrl:url,
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
                    <input type="file" name="image" onChange= {e=>setImage(e.target.files[0])}/>
                </div>
                <div>
                    <label for="title">Title:</label>
                <input value={title} type="text" onChange={e=>setTitle(e.target.value)} name="title"/>
                </div>
                <div>
                    <label for="title">Description:</label>
                <input value={description} type="text" onChange={e=>setDescription(e.target.value)} name="description"/>
                </div>
                 <button type={"submit"} >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddDeal;