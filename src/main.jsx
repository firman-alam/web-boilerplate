import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import "./index.css";
import AppRoutes from "@/route";
import { store } from "@/app/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename={import.meta.env.VITE_BASE_NAME}>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);
