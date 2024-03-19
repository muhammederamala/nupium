import React, { Fragment, useState } from "react";
import { Outlet } from "react-router";

import { useLocation } from "react-router-dom";

import NavigationBar from "../components/navbar/NavigationBar";
import FooterComponent from "../components/footer/FooterComponent";

function Layout() {
  const location = useLocation();
  const [isEnterprise, setIsEnterprise] = useState(
    location.pathname.startsWith("/enterprise")
  );

  return (
    <Fragment>
      <NavigationBar isEnterprise={isEnterprise} />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </Fragment>
  );
}

export default Layout;
