import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import "../css/login-register.css";

export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginPage}></Route>
      <Route exact path="/auth/register" component={RegisterPage}></Route>
      <Redirect to="/auth/login>" />
    </Switch>
  );
};
