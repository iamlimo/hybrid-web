import React from "react";
import Signin from "./auth/Signin";
import Login from "./auth/Login";
import Recover from "./auth/Recover";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Prompt from "./auth/Prompt";

function App() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden">

      <Router>
        <Routes>
          <Route path="/" element={ <Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover" element={<Recover /> } />
          <Route path="/prompt" element={<Prompt /> } />
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
