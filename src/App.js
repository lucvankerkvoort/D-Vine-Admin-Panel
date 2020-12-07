import React, { useContext } from "react";
import Login from "./Components/Login/login";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./Styles/import.scss";
import Navbar from "./Components/Navbar/navbar";
import { UserContext } from "./Services/Auth";
import { DbProvider } from "./Services/Db";

const App = () => {
  const user = useContext(UserContext);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <DbProvider>
          <HashRouter>
            <Navbar />
            <Route exact path="/" render={(props) => <Home {...props} />} />
          </HashRouter>
        </DbProvider>
      )}
    </div>
  );
};
export default App;
