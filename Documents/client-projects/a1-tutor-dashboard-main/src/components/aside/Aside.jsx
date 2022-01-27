/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { ReactComponent as Home } from "../../images/Category.svg";
import { ReactComponent as Subjects } from "../../images/Bookmark.svg";
import { ReactComponent as CBT } from "../../images/Document.svg";
import { ReactComponent as Forums } from "../../images/Chat.svg";
import { ReactComponent as Logout } from "../../images/log-out.svg";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import ProfileIMG from "../../images/Ellipse 42.png";

import "./aside.css";
import { AuthContext } from "../../context/authContext";

const Aside = () => {
  const userFetch = useContext(UserContext);
  const { user } = userFetch;

  const auth = useContext(AuthContext);
  const { logout } = auth;

  return (
    <aside className="aside">
      <div className="profile">
        <NavLink to="/profile" className="profile-img-container">
          <img src={ProfileIMG} alt="" className="profile-img" />
          <div className="profile-summary">
            <p className="profile-name">{user ? user.first_name : ""}</p>
            <p className="profile-name">{user ? user.last_name : ""}</p>
          </div>
        </NavLink>

        <div className="search">
          <input
            type="search"
            className="input-search"
            name="search"
            id="search"
            placeholder="search"
          />
          <BiSearch />
        </div>
      </div>
      <nav className="navbar">
        <ul className="list">
          <NavLink
            to="/dashboard"
            title="Dashboard"
            activeClassName="active"
            className="links"
          >
            <Home />
            <p className="name">Dashboard</p>
          </NavLink>

          <NavLink
            to="/subjects"
            title="Subjects"
            activeClassName="active"
            className="links"
          >
            <Subjects />
            <p className="name">Subjects</p>
          </NavLink>
          <NavLink
            to="/cbt"
            title="CBT"
            activeClassName="active"
            className="links"
          >
            <CBT />
            <p className="name">CBT</p>
          </NavLink>
          <NavLink
            to="/forums"
            title="Forums"
            activeClassName="active"
            className="links"
          >
            <Forums />
            <p className="name">Forums</p>
          </NavLink>
          <a onClick={logout} title="Logout" className="links logout">
            <Logout />
            <p className="name">Logout</p>
          </a>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
