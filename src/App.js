import React, { useContext } from "react";
import Login from "./Components/Login/login";
import { HashRouter, Route } from "react-router-dom";
import Stock from "./Pages/Stock";
import Input from "./Pages/Input";
import Home from "./Pages/Home";
import "./Styles/import.scss";
import Navbar from "./Components/Navbar/navbar";
import { UserContext } from "./Services/Context/Auth";
import { DbProvider } from "./Services/Context/Db";
import { InventoryProvider } from "./Services/Context/Inventory";

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
            <InventoryProvider>
              <Route path="/stock" render={(props) => <Stock {...props} />} />
              <Route path="/input" render={(props) => <Input {...props} />} />
            </InventoryProvider>
          </HashRouter>
        </DbProvider>
      )}
    </div>
  );
};
export default App;
