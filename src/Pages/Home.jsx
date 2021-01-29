import React, { useContext } from "react";
import { db } from "../Firebase/Firebase";
import { UserContext } from "../Services/Context/Auth";
import { DbContext } from "../Services/Context/Db";
const Home = () => {
  const user = useContext(UserContext);
  const { addWine } = useContext(DbContext);
  //const { email } = user;

  const handleSubmit = () => {
    let input = { title: "test", test: "test" };
    db.collection("wine").doc("wine1").get();
  };
  return (
    <div className="home">
      <h1>{"email"}</h1>
      <button onClick={handleSubmit}>Check</button>
    </div>
  );
};
export default Home;
