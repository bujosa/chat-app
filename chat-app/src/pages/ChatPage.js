import React from "react";
import { InboxPeople } from "../components/chat/InboxPeople";
import "../css/chat.css";

export const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
      </div>
    </div>
  );
};
