import React, { Fragment } from "react";
import { Outlet } from "react-router";
import NavigationBar from "../components/navbar/NavigationBar";

function Layout() {
  return (
    <Fragment>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default Layout;
