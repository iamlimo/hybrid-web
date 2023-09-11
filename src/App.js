import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Subscription from "./pages/Subscription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<HomePage />} />
        <Route path='/users' element={<User />} />
        <Route path='/subscription' element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;