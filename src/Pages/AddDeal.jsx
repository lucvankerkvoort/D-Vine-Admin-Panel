import React, { useContext } from 'react';
import "../Styles/AddDeal.scss";

const AddDeal = () => {

    return (

        <div className="add-deal">
            <form>
                <div>
                    <label for="image">Image:</label>
                    <input type="file" name="image"/>
                </div>
                <div>
                    <label for="title">Title:</label>
                <input type="text" name="title"/>
                </div>
                <div>
                    <label for="title">Description:</label>
                <input type="text" name="description"/>
                </div>
                <button onClick={console.log()}>
                    Submit
            </button>
            </form>
        </div>
    )
}

export default AddDeal;