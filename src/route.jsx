import { Route, Routes } from "react-router";
import HomePage from "./pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
