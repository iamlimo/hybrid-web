import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Subscription from "./pages/Subscription";
import BookShelf from "./pages/BookShelf";
import Message from "./pages/Message";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<HomePage />} />
        <Route path='/users' element={<User />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/bookshelf' element={<BookShelf />} />
        <Route path='/messages' element={<Message />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;