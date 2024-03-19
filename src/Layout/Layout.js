import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router";

import { useLocation } from "react-router-dom";

import NavigationBar from "../components/navbar/NavigationBar";
import FooterComponent from "../components/footer/FooterComponent";

function Layout() {
  const location = useLocation();
  const [hideLayouts, setHideLayouts] = useState(false);

  useEffect(() => {
    setHideLayouts(location.pathname == "/");
  }, [location.pathname]);

  const [isEnterprise, setIsEnterprise] = useState(
    location.pathname.startsWith("/enterprise")
  );

  return (
    <Fragment>
      {!hideLayouts && <NavigationBar isEnterprise={isEnterprise} />}
      <main>
        <Outlet />
      </main>
      {!hideLayouts && <FooterComponent />}
    </Fragment>
  );
}

export default Layout;
