import { useAuth } from "../hooks/auth";
import { Routes, Route } from "react-router-dom";
import { NewDishs } from "../pages/NewDishs";
import { Home } from "../pages/Home";
import { Menu } from "../pages/MenuPage";

import { DescriptionDishs } from "../pages/DescriptionDishs";

export function AppRoutes() {
  const { user } = useAuth();
  const role = user.role.includes("admin");
  console.log("appRoutes", role);

  return (
    <Routes>
      {role ? (
        <Route path="/" element={<NewDishs />} />
      ) : (
        <Route path="/" element={<Home />} />
      )}
      <Route path="/dishs" element={<DescriptionDishs />} />
      <Route path="/menupage" element={<Menu />} />
    </Routes>
  );
}
