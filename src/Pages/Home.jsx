import React, { useContext } from "react";
import { UserContext } from "../Services/Auth";
const Home = () => {
  const user = useContext(UserContext);
  const { email } = user;

  return <h1>{email}</h1>;
};
export default Home;
