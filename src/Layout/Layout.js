import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router";

import { useLocation } from "react-router-dom";

import NavigationBar from "../components/navbar/NavigationBar";
import FooterComponent from "../components/footer/FooterComponent";

function Layout() {
  const location = useLocation();
  const [hideLayouts, setHideLayouts] = useState(false);

  const [isEnterprise, setIsEnterprise] = useState(
    location.pathname.startsWith("/enterprise")
  );

  useEffect(() => {
    // setHideLayouts(location.pathname == "/");
    setIsEnterprise(location.pathname.startsWith("/enterprise"));
  }, [location.pathname]);

  return (
    <Fragment>
      <NavigationBar isEnterprise={isEnterprise} />
      <main>
        <Outlet />
      </main>
      {!hideLayouts && <FooterComponent />}
    </Fragment>
  );
}

export default Layout;
