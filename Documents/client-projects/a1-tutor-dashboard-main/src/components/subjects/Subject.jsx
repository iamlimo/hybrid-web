import React from "react";
import {
  NavLink,
  useRouteMatch,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Search from "../main/Search";
import All from "./All";
import Enrolled from "./Enrolled";
import Recent from "./Recent";
import "./subjects.css";

const Subject = () => {
  const { path, url } = useRouteMatch();
  const location = useLocation();

  return (
    <section className="subjects">
      <Search />
      <div className="subjects-wrapper">
        <div className="button-wrapper">
          <NavLink
            to={`${url}`}
            className="subjects-btn"
            activeClassName={
              location.pathname === "/subjects" ? "active-btn" : ""
            }
          >
            Enrolled subjects
          </NavLink>
          <NavLink
            to={`${url}/all-subjects`}
            className="subjects-btn"
            activeClassName="active-btn"
          >
            All subjects
          </NavLink>
          <NavLink
            to={`${url}/recent-added`}
            className="subjects-btn"
            activeClassName="active-btn"
          >
            Recent added
          </NavLink>
          <Switch>
            <Route exact path={`${path}`}>
              <Enrolled />
            </Route>
            <Route path={`${path}/all-subjects`}>
              <All />
            </Route>
            <Route path={`${path}/recent-added`}>
              <Recent />
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
};

export default Subject;
