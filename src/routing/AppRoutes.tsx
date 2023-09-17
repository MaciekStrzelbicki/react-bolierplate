import React from "react";

import { Route, Routes } from "react-router-dom";
import { SamplePage } from "../Pages/SamplePage";
import { routes } from "./routes.schema";

export const AppRoutes = () => (
  <Routes>
    <Route path={routes.BASE_NAME} element={<SamplePage />} />
  </Routes>
);
