import React from "react";
import "./HeaderBar.css";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

function HeaderBar() {
  return (
    <>
      <div className="HeaderBar">
        <div className="icon">
          <i>
            <IoChatbubbleEllipsesOutline />
          </i>
        </div>
        <div className="icon">
          <i>
            <IoIosNotificationsOutline />
          </i>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
