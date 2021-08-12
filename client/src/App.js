import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";

function App() {
  const [mylogin, setMylogin] = useState(false);
  const [mystore, setMystore] = useState(null);

  useEffect(() => {
    store();
  }, []);

  const store = () => {
    let mystore = JSON.parse(localStorage.getItem("login"));

    if (mystore && mystore.login) {
      setMylogin(true);
      setMystore(mystore);
    }
  };

  return (
    <>
      {!mylogin ? (
        <Auth setMylogin={setMylogin} mystore={store} />
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default App;
