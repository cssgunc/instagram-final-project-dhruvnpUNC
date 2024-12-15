import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from "./App.jsx"
import Login from "./login/Login.jsx"
import Signup from "./signup/Signup.jsx"
import Feed from "./feed/Feed.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/account" element={<App />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/home" element={<Feed />} />
    </Routes>
  </BrowserRouter>
);

/** My Laptop is 16:10  2560 x 1600 so if it looks weird on your end that may be the reason*/