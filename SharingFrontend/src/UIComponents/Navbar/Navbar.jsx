import React, { useState } from "react";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { BsChevronCompactRight } from "react-icons/bs";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LiaCopyrightSolid } from "react-icons/lia";

function Navbar() {
  const [Isactive, setActive] = useState(false);
  function toggletheActive() {
    setActive(!Isactive);
  }
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
                <p>Home</p>
              </div>
              <div className="sidepyramid">
                <BsChevronCompactRight />
              </div>
            </li>

            <li>
              {" "}
              <div className="icon-text">
                <MdOutlineAddPhotoAlternate />
                <p>Post</p>
              </div>
              <div className="sidepyramid">
                <BsChevronCompactRight />
              </div>
            </li>

            <li>
              {" "}
              <div className="icon-text">
                <CgProfile />

                <p>Profile</p>
              </div>
              <div className="sidepyramid">
                <BsChevronCompactRight />
              </div>
            </li>
          </ul>
        </div>

        <div className="CopyRight">
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