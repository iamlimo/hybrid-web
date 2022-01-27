import React, { useContext } from "react";
import { ReactComponent as User } from "../../images/whh_profile.svg";
import { ReactComponent as Card } from "../../images/fluent_payment-16-filled.svg";
import { ReactComponent as Utils } from "../../images/eos-icons_abstract-instance.svg";
import { ReactComponent as Masks } from "../../images/mask.svg";
import ProfileIMG from "../../images/Ellipse 42.png";
import camera from "../../images/Group 279.svg";
import "./profile.css";
import { useRouteMatch, Switch, Route, useLocation } from "react-router";
import EditProfile from "./EditProfile";
import Subscription from "./Subscription";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Payment from "./Payment";




const ProfileMain = () => {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const userFetch = useContext(UserContext);
  const { user } = userFetch;
  return (
    <section className="profile-main">
      <div className="profile-blue">
        <Masks />
      </div>
      <div className="profile-wrapper">
        <div className="profile-content-1">
          <div className="profile-main-img">
            <img src={ProfileIMG} alt="" className="img-main1" />
            <img src={camera} alt="" className="img-main2" />
          </div>
          <div className="profile-main-name">
            <h3>
              {user ? user.first_name : ""} {user ? user.last_name : ""}
            </h3>
            <p>Student</p>
          </div>
          <ul className="profile-list">
            <li className="profile-item">
              <NavLink
                exact
                activeClassName={
                  location.pathname === "/profile" ? "profile-active" : ""
                }
                to={`${url}`}
                className="profile-link"
              >
                <User />
                <span>Edit profile</span>
              </NavLink>
            </li>
            <li className="profile-item">
              <NavLink
                exact
                activeClassName="profile-active"
                to={`${url}/sub`}
                className="profile-link"
              >
                <Utils />
                <span>Subscription</span>
              </NavLink>
            </li>
            <li className="profile-item">
              <NavLink
                exact
                activeClassName="profile-active"
                to={`${url}/payment`}
                className="profile-link"
              >
                <Card />
                <span>Transaction</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path={`${path}`} component={EditProfile} />
          <Route path={`${path}/sub`} component={Subscription} />
          <Route path={`${path}/payment`} component={Payment} />
        </Switch>
      </div>
    </section>
  );
};

export default ProfileMain;
