import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/MenuPage";

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
