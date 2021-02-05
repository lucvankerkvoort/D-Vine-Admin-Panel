import React, { createContext, useReducer } from "react";
import InventoryReducer from "../Reducers/InventoryReducer";
import logo from "../../Images/Logo.png";
const initialState = {
  input: {
    title: "",
    images: [],
    rating: 0,
    price: 0.0,
    description: "",
    quantity: 0,
    type: "",
    classification:"",
    brand:"",
    vintage:"",
    country:"",
    region:"",
    volume:"",
    condition:"",
    label:"",
    stock:""
  },
  stock: [
    {
      id: "test_1",
      title: "test",
      images: logo,
      quantity: 0,
      stock: 0,
    },
  ],
};



export const InventoryContext = createContext(initialState);
export const InventoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InventoryReducer, initialState);

  const changeInputState = (state) => {
    dispatch({ type: "CHANGE_INPUT_STATE", payload: state });
  };

  const changeStockState = (state) => {
    dispatch({ type: "CHANGE_STOCK_STATE", payload: state });
  };
  return (
    <InventoryContext.Provider
      value={{
        state,
        changeInputState,
        changeStockState,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
