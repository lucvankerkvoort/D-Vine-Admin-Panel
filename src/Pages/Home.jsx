import React, { useContext } from "react";
import { db } from "../Firebase/Firebase";
import { UserContext } from "../Services/Auth";
import { DbContext } from "../Services/Db";
const Home = () => {
  const user = useContext(UserContext);
  const { addWine } = useContext(DbContext);
  const { email } = user;

  const handleSubmit = () => {
    let input = { title: "test", test: "test" };
    db.collection("wine")
      .doc("AfqsMHQzIVgZrXw1Jy26")
      .get()
      .then((result) => console.log("result", result));
  };
  return (
    <div className="home">
      <h1>{email}</h1>
      <button onClick={handleSubmit}>Check</button>
    </div>
  );
};
export default Home;
