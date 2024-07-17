import React from "react";
import "./Card.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const Card = ({ image }) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={image} alt="Card" className="card-image" />
        <div className="card-content">
          <p>This is a description of the card content.</p>
        </div>
      </div>

      <div className="card-icons">
        <span className="icon like-icon">
          <FcLikePlaceholder />
        </span>
        <span className="icon comment-icon">
          <FaRegCommentDots />
        </span>
        <span className="icon share-icon">
          <IoShareSocialOutline />
        </span>

        <span className="Profile">
          <img src="/Image/a.jpg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Card;
