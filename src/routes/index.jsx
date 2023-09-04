import { Routes, Route } from "react-router-dom";
import { PageDashboard } from "../pages/dashboard";
import { PageInitial } from "../pages/initial";
import { PageRegister } from "../pages/register";
import { PageLogin } from "../pages/login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PageInitial />} />
      <Route path="/dashboard" element={<PageDashboard />} />
      <Route path="/register" element={<PageRegister />} />
      <Route path="/login" element={<PageLogin />} />
    </Routes>
  );
};
