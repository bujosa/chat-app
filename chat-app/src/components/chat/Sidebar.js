import React from "react";

export const Sidebar = () => {
  return (
    <div className="inbox_chat">
      {/* <!-- conversación activa inicio --> */}
      <div className="chat_list active_chat">
        <div className="chat_people">
          <div className="chat_img">
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="sunil"
            />
          </div>
          <div className="chat_ib">
            <h5>Some random name</h5>
            <span className="text-success">Online</span>
            <span className="text-danger">Offline</span>
          </div>
        </div>
      </div>
      {/* <!-- conversación activa Fin --> */}

      {/* <!-- conversación inactiva inicio --> */}
      <div className="chat_list">
        <div className="chat_people">
          <div className="chat_img">
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="sunil"
            />
          </div>
          <div className="chat_ib">
            <h5>
              Sunil Rajput <span className="chat_date">Dec 25</span>
            </h5>
            <p>
              Test, which is a new approach to have all solutions astrology
              under one roof.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- conversación inactiva inicio --> */}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};
