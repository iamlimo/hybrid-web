import { useContext } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUP from "./components/sign/SignUP";
import Login from "./components/sign/Login";
import Verify from "./components/sign/Verify";
import Aside from "./components/aside/Aside";
import Dashboard from "./components/main/Dashboard";
import Subject from "./components/subjects/Subject";
import Cbt from "./components/comptest/Cbt";
import Forum from "./components/Forums/Forums";
import ForgotPassword from "./components/sign/ForgotPassword";
import VerifyForgotPassword from "./components/sign/VerifyForgotPassword";
import Profile from "./components/profile/Profile";
import { AuthContext } from "./context/authContext";

import FourOFour from "./components/four0four/Four0Four";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth.isAuthenticated() ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/student/login" />
        )
      }
    ></Route>
  );
};

function App() {
  const auth = useContext(AuthContext);

  return (
    <>
      {!auth.isAuthenticated() && <Redirect to="/student/login" />}
      <Route exact path="/student/login" component={Login} />
      <Route exact path="/student/signup" component={SignUP} />
      <Route exact path="/reset" component={ForgotPassword} />
      <Route exact path="/auth/verify" component={Verify} />
      <Route exact path="/reset/verify" component={VerifyForgotPassword} />

      <div className="app">
        {auth.isAuthenticated() === true && <Aside />}
        <Switch>
          <AuthenticatedRoute exact path="/">
            <Dashboard />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/profile" component={Profile} />
          <AuthenticatedRoute exact path="/dashboard">
            <Dashboard />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/subjects" component={Subject} />
          <AuthenticatedRoute path="/cbt" component={Cbt} />
          <AuthenticatedRoute path="/forums" component={Forum} />
          <AuthenticatedRoute path="*" component={FourOFour} />
        </Switch>
      </div>
    </>
  );
}

export default App;
