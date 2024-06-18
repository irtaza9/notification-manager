import { Box, IconButton, Tooltip } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountMenu from "../../AccountMenu/AccountMenu";
import { useState } from "react";
import IconsTooltip from "../../IconTooltip/IconsTooltip";
import Dropdown from "../../DropDown";
import NotificationTray from "../../NotificationTray";
const Topbar = ({ broken, setToggled, toggled }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AccountMenu
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        open={open}
      />
      <Box display="flex" justifyContent="space-between" p={1}>
        <Box display="flex" alignItems="center">
          {broken && (
            <IconsTooltip title={"Open"} onClick={() => setToggled(!toggled)}>
              <MenuOutlinedIcon sx={{ margin: "0 6 0 2" }} />
            </IconsTooltip>
          )}
          <Box display="flex" p={0.2}>
            <Dropdown
              style={{ left: 0 }}
              featuremenu={true}
              newmessage={false}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <NotificationTray />
          <Tooltip title="Setting">
            <IconButton
              size="large"
              aria-label="show profile"
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <SettingsOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};

export default Topbar;
