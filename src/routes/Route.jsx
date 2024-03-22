import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import EnterpriseHomePage from "../pages/Enterprise/Home/EnterpriseHomePage";
import Layout from "../Layout/Layout";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      {/* <Route path="/" element={<WelcomePage />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/enterprise" element={<EnterpriseHomePage />} />
    </Route>
  )
);

export default Router;
