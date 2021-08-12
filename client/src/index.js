import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/style.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/dashboard">
        <Dashboard />
      </Route> */}
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
