import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import NotFound from "./pages/404/NotFound";
import Profile from "./pages/Profile/Profile";
import Advert from "./pages/Advert/Advert";
import SellerProfile from "./pages/SellerProfile/SellerProfile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {ProtectedRoute} from "./components/protected-route/protected-route";

export function AppRoutes() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/adv">
        <Route path="/adv:advertId" element={<Advert />} />
      </Route>
      <Route path="/sellerprofile" element={<SellerProfile />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
        <Route path="/myprofile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
