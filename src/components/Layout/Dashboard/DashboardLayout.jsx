import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import PortalSidebar from "../../globals/Sidebar/Sidebar";
import Topbar from "../../globals/Appbar/TopAppbar";

const DashboardLayout = () => {
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <ScrollRestoration />
      <Box display={"flex"}>
        {pathname !== "/" ? (
          <PortalSidebar
            toggled={toggled}
            setToggled={setToggled}
            setBroken={setBroken}
            broken={broken}
          />
        ) : null}
        <Box flexGrow={1}>
          {pathname !== "/" ? (
            <Topbar broken={broken} toggled={toggled} setToggled={setToggled} />
          ) : null}
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
