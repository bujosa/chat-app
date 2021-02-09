import React, { useContext } from "react";
import { ChatContext } from "../../context/chat/ChatContext";
import { ChatList } from "./ChatList";

export const SideBar = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <div className="inbox_chat">
      {chatState.users.map((user) => (
        <ChatList key={user.uid} user={user} />
      ))}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};
