import React, { useState, createContext, useCallback } from "react";
import { fetchNoToken } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const resp = await fetchNoToken("login", { email, password }, "POST");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { user } = resp;
      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
    }
    return resp.msg;
  };

  const register = async (email, name, password) => {
    const resp = await fetchNoToken(
      "login/register",
      { email, name, password },
      "POST"
    );
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { user } = resp;
      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
    }
    return resp.msg;
  };

  const tokenVerify = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{ logout, login, tokenVerify, register, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
