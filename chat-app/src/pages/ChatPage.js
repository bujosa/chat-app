import React from "react";
import { InboxPeople } from "../components/chat/InboxPeople";
import { Messages } from "../components/chat/Messages";
import "../css/chat.css";

export const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        <Messages />
      </div>
    </div>
  );
};
