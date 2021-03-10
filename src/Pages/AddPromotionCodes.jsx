import React, { useState } from 'react';
import "../Styles/AddDeal.scss";
import {db} from "../Firebase/Firebase";
import firebase from "firebase";


const AddDeal = () => {
    const [code,setCode]=useState("");
    const [percentage,setPercentage]=useState(0);
    

    const handleSubmit=e=>{
        e.preventDefault();
        db.collection("promotioncodes").doc(code).set({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            percentage
        })
        setCode("");
        setPercentage(0);
    }
    
    return (
        
        <div className="add-deal">
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="title">Code:</label>
                <input value={code} type="text" onChange={e=>setCode(e.target.value)} name="code"/>
                </div>
                <div>
                    <label for="title">Percentage:</label>
                <input value={percentage} type="number" max={100} onChange={e=>setPercentage(e.target.value)} name="description"/>
                </div>
                 <button type={"submit"} >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddDeal;