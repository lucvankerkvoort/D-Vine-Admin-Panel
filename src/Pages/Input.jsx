import React, { useContext,useState } from "react";
import AddImage from "../Components/Input/addImage";
import Images from "../Components/Input/images";
import Price from "../Components/Input/price";
import Quantity from "../Components/Input/quantity";
import Rating from "../Components/Input/rating";
import Title from "../Components/Input/title";
import Remove from "../Components/functions/remove";
import Type from "../Components/Input/type";
import { InventoryContext } from "../Services/Context/Inventory";
import { db } from "../Firebase/Firebase";
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Input = (props) => {
  const [editorState,setEditorState]=useState(undefined);
  const inventory = useContext(InventoryContext);
  const { changeInputState } = useContext(InventoryContext);
  const {
    title,
    rating,
    quantity,
    type,
    description,
    price,
    images,
    classification,
    brand,
    vintage,
    country,
    region,
    volume,
    condition,
    label,
    stock
  } = inventory.state.input;
  console.log(inventory.state.input);
  const disabled =
    title === "" ||
    rating === 0 ||
    price === 0.0 ||
    type === "" ||
    description === "" ||
    quantity === 0;
    const upload=()=>{
      db.collection('wine').add({
        title,
        rating,
        quantity,
        type,
        description,
        price,
        images,
        classification,
        brand,
        vintage,
        country,
        region,
        volume,
        condition,
        label,
        stock
      })
    console.log("success");
    }
  
  return (
    <div className="input" style={{maxWidth:"700px",height:"auto"}}>
      <AddImage />
      {[].map((image) => {
        return (
          <Remove remove={image}>
            <Images image={image} />
          </Remove>
        );
      })}
      <Title title={title} setTitle={changeInputState} />
      <Rating rating={rating} setRating={changeInputState} />
      <Quantity quantity={quantity} setQuantity={changeInputState} />
      <Price price={price} setPrice={changeInputState} />
      <Type type={type} setType={changeInputState} />

      <label>Description:</label>
      <div style={{ border: "1px solid lightgray", backgroundColor: "#EBEBE4", padding: "5px", marginBottom: "5px" }}>
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={(e)=>{
                setEditorState(e)
                changeInputState({ description: draftToMarkdown(convertToRaw(e.getCurrentContent())) })
            }}
            />
        </div>
      <label>Classification:</label>
      <input type="text" onChange={e=>{changeInputState({classification:e.target.value})}}/>
      <label>brand:</label>
      <input type="text" onChange={e=>{changeInputState({brand:e.target.value})}}/>
      <label>vintage:</label>
      <input type="text" onChange={e=>{changeInputState({vintage:e.target.value})}}/>
      <label>country:</label>
      <input type="text" onChange={e=>{changeInputState({country:e.target.value})}}/>
      <label>region:</label>
      <input type="text" onChange={e=>{changeInputState({region:e.target.value})}}/>
      <label>volume:</label>
      <input type="text" onChange={e=>{changeInputState({volume:e.target.value})}}/>
      <label>condition:</label>
      <input type="text" onChange={e=>{changeInputState({condition:e.target.value})}}/>
      <label>label:</label>
      <input type="text" onChange={e=>{changeInputState({label:e.target.value})}}/>
      <label>stock:</label>
      <input type="text" onChange={e=>{changeInputState({stock:e.target.value})}}/>
      
      <button disabled={disabled} onClick={upload}>
        Submit
      </button>
    </div>
  );
};

export default Input;
