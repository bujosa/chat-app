import React from "react";
import { ChatList } from "./ChatList";

export const SideBar = () => {
  const chats = [1, 2, 3, 4];
  return (
    <div className="inbox_chat">
      {chats.map((chat) => (
        <ChatList key={chat} />
      ))}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};
