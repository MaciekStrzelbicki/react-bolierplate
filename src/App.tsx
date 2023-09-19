import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routing/AppRoutes";

export const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
