import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import NotFound from "./pages/404/NotFound";
import Profile from "./pages/Profile/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/myprofile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
