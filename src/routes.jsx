import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import NotFound from "./pages/404/NotFound";
import Profile from "./pages/Profile/Profile";
import Advert from "./pages/Advert/Advert";
import SellerProfile from "./pages/SellerProfile/SellerProfile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/myprofile" element={<Profile />} />
      <Route path="/adv" element={<Advert />} />
      <Route path="/sellerprofile" element={<SellerProfile />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
