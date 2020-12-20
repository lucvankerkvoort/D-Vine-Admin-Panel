import Input from "../../Pages/Input";

const InventoryReducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "CHANGE_INPUT_STATE":
      return {
        ...state,
        input: {
          ...state.input,
          ...action.payload,
        },
      };
    case "CHANGE_STOCK_STATE": {
      let item;
      for (let i = 0; i < state.stock.length; i++) {
        if (state.stock[i].id === action.payload.id) {
          item = {
            ...state.stock[i],
            ...action.payload.input,
          };
          state.stock.splice(i, 1, item);
        }
      }
      return { ...state };
    }
    default:
      return state;
  }
};

export default InventoryReducer;
