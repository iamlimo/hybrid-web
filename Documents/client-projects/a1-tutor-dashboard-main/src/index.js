import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter as Router } from "react-router-dom";
import { FetchProvider } from "./context/fetchContext";
import { UserProvider } from "./context/userContext";

ReactDOM.render(
  <ErrorBoundary>
    <AuthProvider>
      <FetchProvider>
        <UserProvider>
          <Router>
            <App />
          </Router>
        </UserProvider>
      </FetchProvider>
    </AuthProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
