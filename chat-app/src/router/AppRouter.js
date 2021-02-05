import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { ChatPage } from "../pages/ChatPage";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { auth, tokenVerify } = useContext(AuthContext);

  useEffect(() => {
    tokenVerify();
  }, [tokenVerify]);

  if (auth.checking) {
    return <h1> Wait a Second</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={auth.logged}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRoute
            isAuthenticated={auth.logged}
            exact
            path="/"
            component={ChatPage}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
