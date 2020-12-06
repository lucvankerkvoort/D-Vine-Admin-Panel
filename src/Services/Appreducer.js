import { db } from "../Firebase/Firebase";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_WINE":
      return db.collection(action.payload).delete();
    case "ADD_WINE":
      return db
        .collection("wine")
        .doc(action.payload.title)
        .set(action.payload);
    case "EDIT_WINE":
      return db.collection("wine").where("id", "==", action.payload);
    default:
      return state;
  }
};
export default AppReducer;
