import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/MenuPage";

import { DescriptionDishs } from "../pages/DescriptionDishs";
import { EditDish } from "../pages/EditDishs";
import { NewDishs } from "../pages/NewDishs";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editdishes/:id" element={<EditDish />} />
      <Route path="/newdishes" element={<NewDishs />} />
      <Route path="/dishs" element={<DescriptionDishs />} />
      <Route path="/menupage" element={<Menu />} />
    </Routes>
  );
}
