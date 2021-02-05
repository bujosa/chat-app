import React, { useState, createContext, useCallback } from "react";

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

  const login = (email, password) => {};

  const register = (email, name, password) => {};

  const tokenVerify = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ logout, login, tokenVerify, register }}>
      {children}
    </AuthContext.Provider>
  );
};
