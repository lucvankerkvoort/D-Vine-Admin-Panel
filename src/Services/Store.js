import React, { createContext, useReducer } from "react";
import {db} from "../Firebase/Firebase"
const initialState = { user: null };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {

  const Create = () => {
    
  }

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "authed":
        return Object.assign({}, state, { authed: action.payload });
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
