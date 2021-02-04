import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChatPage } from "../pages/ChatPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/register" component={ChatPage} />
        </Switch>
      </div>
    </Router>
  );
};
