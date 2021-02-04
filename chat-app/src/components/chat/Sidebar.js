import React from "react";
import { ChatList } from "./ChatList";

export const SideBar = () => {
  return (
    <div className="inbox_chat">
      <ChatList />
      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};
