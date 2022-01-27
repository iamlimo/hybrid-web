import React from "react";
import {
  NavLink,
  useRouteMatch,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Search from "../main/Search";
import "./cbt.css";
import Sub from "./Sub";
import SubjectCBT from "./SubjectCBT";
import QuestionModal from "./QuestionModal";
import ResultCBT from "./ResultCBT";

const Cbt = () => {
  const { path, url } = useRouteMatch();
  const location = useLocation();
  return (
    <section className="cbt">
      <Search />
      <div className="cbt-wrapper">
        <div className="button-wrapper">
          <NavLink
            to={`${url}`}
            className="subjects-btn"
            activeClassName={location.pathname === "/cbt" ? "active-btn" : ""}
          >
            Subjects
          </NavLink>
          <NavLink
            to={`${url}/history`}
            className="subjects-btn"
            activeClassName="active-btn"
          >
            History
          </NavLink>
          <NavLink
            to={`${url}/leaderboard`}
            className="subjects-btn"
            activeClassName="active-btn"
          >
            Leaderboard
          </NavLink>
          <Switch>
            <Route exact path={`${path}`}>
              <SubjectCBT />
            </Route>
            <Route path={`${path}/history`}>
              <ResultCBT />
            </Route>
            <Route path={`${path}/leaderboard`}>
              <Sub />
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
};

export default Cbt;
