import React from "react";
import { IncomingMessage } from "./IncomingMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {
  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">
        <IncomingMessage />

        {/* <!-- Mensaje enviado inicio --> */}
        <div className="outgoing_msg">
          <div className="sent_msg">
            <p>Test which is a new approach to have all solutions</p>
            <span className="time_date"> 11:01 AM | June 9</span>
          </div>
        </div>
        {/* <!-- Mensaje enviado inicio --> */}
      </div>
      {/* <!-- Historia Fin --> */}
      <SendMessage />
    </div>
  );
};
