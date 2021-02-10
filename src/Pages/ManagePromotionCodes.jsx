import React, { useEffect,useState } from "react";
import {db} from "../Firebase/Firebase";
import "../Styles/ManagePromotionCodes.scss";

const Stock = () => {
 
  const [codes,setCodes]=useState([]);

  
  useEffect(()=>{
    db.collection('promotioncodes').onSnapshot(snapshot=>{
        setCodes(snapshot.docs.map(doc=>({
            id:doc.id,
            code:doc.data()})));
    })
},[])
console.log(codes);
  return (
    <div className="codes-container">
      {codes.map(({id,code}) => (
        <div key={id} className="codes-block">
            <h3>{id}</h3>
            <p>Discount Percentage: {code.percentage}</p>
            <button onClick={()=>{db.collection("promotioncodes").doc(id).delete()}}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Stock;
