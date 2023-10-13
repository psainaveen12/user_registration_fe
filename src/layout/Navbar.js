import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Full Stack Web App
          </a>

          <DarkModeToggle />
          <Link className="btn btn-outline-light mx-2" to="/HomeUserProfiles">
            {" "}
            Profiles
          </Link>
          <Link className="btn btn-outline-light mx-2" to="/HomeFakenames">
            {" "}
            FakeUsers
          </Link>
          <Link className="btn btn-outline-light" to="/adduser">
            <FontAwesomeIcon icon={faUserPlus} /> Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
