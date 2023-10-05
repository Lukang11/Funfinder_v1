import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-list">
        <li className="logo">FunFinder</li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "white" }} />
        </li>
        <li>
          <FontAwesomeIcon icon={faMessage} style={{ color: "white" }} />
        </li>
        <li className="prof-btn">
          <div className="profile-btn"> Profile</div>
        </li>
      </ul>
    </div>
  );
}
