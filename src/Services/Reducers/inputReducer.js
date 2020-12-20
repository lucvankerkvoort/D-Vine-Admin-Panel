const InputReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_STATE": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "REMOVE_FROM_STATE": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default InputReducer;
