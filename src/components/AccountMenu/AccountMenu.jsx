import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import SyncProblemIcon from "@mui/icons-material/SyncProblem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../Utils/Cookies";
let menuitems = {
  beforedivider: [
    {
      name: "Account Settings",
      path: "/userinfo",
    },
    {
      name: "Server Status",
      path: "/pinghistory",
    },
  ],
  afterdivider: [
    {
      name: "Activity Logs",
      path: ".",
    },
    {
      name: "Logout",
      path: ".",
    },
  ],
};

export default function AccountMenu({ anchorEl, handleClose, open }) {
  const { afterdivider, beforedivider } = menuitems;
  const navigate = useNavigate();
  const logout = () => {
    removeCookie("_pSession");
    navigate("/auth-login");
  };
  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {beforedivider.map((menuItem, index) => (
          <MenuItem key={index}>
            <ListItemIcon>
              {menuItem.name === "Account Settings" ? (
                <AccountCircleIcon fontSize="small" />
              ) : (
                <SyncProblemIcon fontSize="small" />
              )}
            </ListItemIcon>
            {menuItem.name}
          </MenuItem>
        ))}
        <Divider />
        {afterdivider.map((menuItem, index) => (
          <MenuItem key={index} onClick={logout}>
            <ListItemIcon>
              {menuItem.name === "Activity Logs" ? (
                <WebStoriesIcon fontSize="small" />
              ) : (
                <PersonAdd fontSize="small" />
              )}
            </ListItemIcon>
            {menuItem.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
