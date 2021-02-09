import React, { createContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  return <ChatContext.Provider>{children}</ChatContext.Provider>;
};
