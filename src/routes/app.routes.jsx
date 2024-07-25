import { Routes, Route } from "react-router-dom";

// import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { Menu } from "../pages/MenuPage";
// import { SignIn } from "../pages/SignIn";
// import { SignUp } from "../pages/SingUp";
import { DescriptionDishs } from "../pages/DescriptionDishs";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishs" element={<DescriptionDishs />} />
      <Route path="/menupage" element={<Menu />} />
    </Routes>
  );
}
