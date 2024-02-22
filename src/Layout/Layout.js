import React, { Fragment } from "react";
import { Outlet } from "react-router";
import NavigationBar from "../components/navbar/NavigationBar";
import FooterComponent from "../components/footer/FooterComponent";

function Layout() {
  return (
    <Fragment>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </Fragment>
  );
}

export default Layout;
