import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { ChatPage } from "../pages/ChatPage";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  const { auth, tokenVerify } = useContext(AuthContext);

  useEffect(() => {
    return () => {
      tokenVerify();
    };
  }, [tokenVerify]);

  if (auth.checking) {
    return <h1> Wait a Second</h1>;
  }
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={ChatPage} />
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </Router>
  );
};
