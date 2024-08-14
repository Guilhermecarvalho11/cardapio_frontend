import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SingUp";

export function AuthRoutes() {
  const user = localStorage.getItem("@cardapioon:user");
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      {!user && <Route path="*" element={<Navigate to="/register" />} />}
    </Routes>
  );
}
