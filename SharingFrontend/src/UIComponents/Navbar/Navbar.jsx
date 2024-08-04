import React, { useState } from "react";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { BsChevronCompactRight } from "react-icons/bs";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LiaCopyrightSolid } from "react-icons/lia";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [Isactive, setActive] = useState(false);
  function toggletheActive() {
    setActive(!Isactive);
  }

  const Logout = () => {
    navigate("/logout");
  };
  return (
    <div>
      <div className={`Container ${Isactive ? "active" : ""}`}>
        <div className="logo">
          <img src="/Image/campfire.jpg" alt="image" />
          <p>SharingApp</p>
        </div>
        {/* Menu */}
        <div className="Menutext">
          <p>MENU</p>
        </div>
        <div className="Menu">
          <ul>
            <li>
              {" "}
              <div className="icon-text">
                <FaHome />
                <NavLink to={"/"}>
                  <p className="text-white">Home</p>
                </NavLink>
              </div>
              <div className="sidepyramid">
                <BsChevronCompactRight />
              </div>
            </li>

            <li>
              {" "}
              <div className="icon-text">
                <MdOutlineAddPhotoAlternate />
                <NavLink to={"/Post"}>
                  <p className="text-white">Post</p>
                </NavLink>
              </div>
              <div className="sidepyramid">
                <BsChevronCompactRight />
              </div>
            </li>

            <li>
              {" "}
              <div className="icon-text">
                <CgProfile />

                <NavLink to={"/Profile"}>
                  <p className="text-white">Profile</p>
                </NavLink>
              </div>
              <div className="sidepyramid">
                <BsChevronCompactRight />
              </div>
            </li>

            <li>
              {" "}
              <div className="icon-text">
                <IoIosNotificationsOutline />
                <NavLink to={"/Profile"}>
                  <p className="text-white">Notification</p>
                </NavLink>
              </div>
              <div className="sidepyramid">
                <BsChevronCompactRight />
              </div>
            </li>

            <li>
              {" "}
              <div className="icon-text">
                <IoChatbubbleEllipsesOutline />

                <NavLink to={"/Profile"}>
                  <p className="text-white">Message</p>
                </NavLink>
              </div>
              <div className="sidepyramid">
                <BsChevronCompactRight />
              </div>
            </li>
            {authStatus ? (
              <li>
                <div className="icon-text">
                  <FiLogOut />
                  <h4 onClick={Logout} className="pointer font-bold">
                    Logout
                  </h4>
                </div>
                <div className="sidepyramid">
                  <BsChevronCompactRight />
                </div>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>

        <div className="CopyRight ">
          <p>CopyRight@Kanav</p>
          <LiaCopyrightSolid />
        </div>

        <div
          className={`hameburger ${Isactive ? "active" : ""}`}
          onClick={toggletheActive}
        >
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
