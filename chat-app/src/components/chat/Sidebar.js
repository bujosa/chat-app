import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { ChatContext } from "../../context/chat/ChatContext";
import { ChatList } from "./ChatList";

export const SideBar = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const { uid } = auth;

  console.log("uid", uid);

  return (
    <div className="inbox_chat">
      {chatState.users
        .filter((user) => user.uid !== uid)
        .map((user) => (
          <ChatList key={user.uid} user={user} />
        ))}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};
