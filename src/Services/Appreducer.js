import { db } from "../Firebase/Firebase";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  console.log(state);
  switch (action.type) {
    case "REMOVE_WINE":
      return db.collection("wine").doc(action.payload).delete();
    case "ADD_WINE":
      console.log("Add Wine");
      db.collection("wine")
        .doc(action.payload.title)
        .set(action.payload)
        .then((result) => (state = result));
      return state;
    case "EDIT_WINE":
      return db
        .collection("wine")
        .where("id", "==", action.payload)
        .set(action.payload);
    case "GET_SIZE":
      let size = db
        .collection("wine")
        .get()
        .then((query) => (size = query.size));
      return size;
    default:
      return "Something went wrong";
  }
};
