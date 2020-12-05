import React, { useContext } from "react";
import Login from "./Components/Login/login";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/navbar";
import { UserContext } from "./Services/Auth";

const App = () => {
  const user = useContext(UserContext);
  return !user ? (
    <Login />
  ) : (
    <HashRouter>
      <Navbar />
      <Route exact path="/" render={(props) => <Home {...props} />} />
    </HashRouter>
  );
};
export default App;
