import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
