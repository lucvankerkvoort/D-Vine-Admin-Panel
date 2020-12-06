import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  wine: [
    {
      id: 1,
      title: "Merlot",
      price: 15,
      description: "Lorem Ipsum",
      rating: 4.0,
    },
  ],
};

export const DbContext = createContext(initialState);
export const DbProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeWine(id) {
    dispatch({
      type: "REMOVE_WINE",
      payload: id,
    });
  }

  function addWine(wine) {
    dispatch({
      type: "ADD_WINE",
      payload: wine,
    });
  }

  function editWine(wine) {
    dispatch({
      type: "EDIT_WINE",
      payload: wine,
    });
  }

  return (
    <DbContext.Provider
      value={{
        wine: state.wine,
        removeWine,
        addWine,
        editWine,
      }}
    >
      {children}
    </DbContext.Provider>
  );
};
