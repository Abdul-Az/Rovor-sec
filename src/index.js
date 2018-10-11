import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/css/material-dashboard-react.css?v=1.4.1";

import Login from "../src/components/Login/Login";
import Error from "../src/components/Login/Error";
// import Example from "../src/views/UserProfile/Example";

import indexRoutes from "routes/index.jsx";
// import App from "./components/App";
// import Branches from "./components/firebase/Branches";
// import LoginAuth from "./components/firebase/LoginAuth";
import Userstable from "./components/firebase/Userstable";
import LoginAuth from "./components/firebase/LoginAuth";
// import Userslist from "./components/firebase/Userslist";


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>

      <Route exact path="/" component={LoginAuth} />
       {/* <Route path="*" component={Error} /> */}
       {/* <Route path="/Example" component={Example} /> */}
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key}   />;
      })}
       
    </Switch>
  </Router>,
  document.getElementById("root")
);
