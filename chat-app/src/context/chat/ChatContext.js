import React, { createContext, useState } from "react";

export const ChatContext = createContext();

const initialState = {
  uid: "",
  activeChat: null,
  users: [],
  messages: [],
};

export const ChatProvider = ({ children }) => {
  return <ChatContext.Provider>{children}</ChatContext.Provider>;
};
