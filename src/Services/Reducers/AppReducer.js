/* eslint-disable import/no-anonymous-default-export */
import { db } from "../../Firebase/Firebase";
export default (state, action) => {
  console.log(state);
  switch (action.type) {
    case "REMOVE_WINE":
      console.log(db);
      return db.collection("wine").doc(action.payload).delete();
    case "ADD_WINE":
      const hashCode = (s) =>
        s.split("").reduce((a, b) => {
          a = (a << 5) - a + b.charCodeAt(0);
          return a & a;
        }, 0);
      console.log("Add Wine");
      db.collection(hashCode(action.payload.title))
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
