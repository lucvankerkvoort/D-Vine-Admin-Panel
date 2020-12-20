import React, { createContext, useReducer } from "react";
import InputReducer from "../Reducers/inputReducer";

const initialState = {
  title: "",
  images: [],
  rating: 0,
  price: 0,
  description: "",
  quantity: 0,
  type: "",
};

export const InputContext = createContext(initialState);
export const InputProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InputReducer, initialState);

  const addToState = (state) => {
    dispatch({ type: "ADD_TO_STATE", payload: state });
  };

  return (
    <InputContext.Provider
      value={{
        state,
        addToState,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
