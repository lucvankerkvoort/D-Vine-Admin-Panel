import "./App.css";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Login from "./Components/Login/login";
import Home from "./Pages/Home";
import { useEffect } from "react";

function App() {
  const user = null;

  const history = useHistory();
  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
    history.push("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <BrowserRouter>
      {user ? (
        <Route path="/home" render={(props) => <Home {...props} />} />
      ) : (
        <Route exact path="/" render={(props) => <Login {...props} />} />
      )}
    </BrowserRouter>
  );
}

export default App;
