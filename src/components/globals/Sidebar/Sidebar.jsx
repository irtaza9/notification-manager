import { useEffect, useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { Link, useLocation, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Badge from "@mui/material/Badge";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarFooter } from "./SidebarFooter";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SendIcon from "@mui/icons-material/Send";
import TimelineIcon from "@mui/icons-material/Timeline";
import { getFeatureMenuLinks } from "../../../Utils/constants";

const Item = ({ title, to, icon, selected, setSelected, slug, pathname }) => {
  let trimmedUrl = pathname.replace(/\/$/, "");
  let trimselected = selected.replace(/\/$/, "");
  const { id } = useParams();
  let menulinks = getFeatureMenuLinks(slug, id);
  let messageActiveMenu =
    menulinks.some((path) => to.startsWith(path)) &&
    menulinks.includes(trimmedUrl);
  let activemenu = trimselected === to || messageActiveMenu;

  return (
    <MenuItem
      active={activemenu}
      onClick={() => setSelected(to)}
      icon={icon}
      component={<Link to={to} />}
      suffix={
        title === "Bar Chart" ? (
          <Typography
            variant="h6"
            fontSize={8}
            p={1}
            borderRadius={2}
            bgcolor={"red"}
          >
            new
          </Typography>
        ) : null
      }
    >
      {title}
    </MenuItem>
  );
};

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#051e34",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

const menuClasses = {
  root: "ps-menu-root",
  menuItemRoot: "ps-menuitem-root",
  subMenuRoot: "ps-submenu-root",
  button: "ps-menu-button",
  prefix: "ps-menu-prefix",
  suffix: "ps-menu-suffix",
  label: "ps-menu-label",
  icon: "ps-menu-icon",
  subMenuContent: "ps-submenu-content",
  SubMenuExpandIcon: "ps-submenu-expand-icon",
  disabled: "ps-disabled",
  active: "ps-active",
  open: "ps-open",
};
const AsideSidebar = ({ toggled, setBroken, setToggled, broken }) => {
  const { pathname } = useLocation();
  const [selected, setSelected] = useState(pathname);
  const [collapsed, setCollapsed] = useState(true);
  const { slug, id } = useParams();
  const [theme, setTheme] = useState("light");
  const [hasImage, setHasImage] = useState(false);
  const [rtl, setRtl] = useState(false);

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: ({ level, active }) => {
      if (level === 0) {
        return {
          color: "#ffffff",
          backgroundColor: active
            ? hexToRgba(
                themes[theme].menu.hover.backgroundColor,
                hasImage ? 0.8 : 1
              )
            : undefined,
          "&$disabled": {
            color: themes[theme].menu.disabled.color,
          },
          "&:hover": {
            backgroundColor: hexToRgba(
              themes[theme].menu.hover.backgroundColor,
              hasImage ? 0.8 : 1
            ),
            color: themes[theme].menu.hover.color,
          },
        };
      }
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  //pending some task here
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 999,
      }}
    >
      <Sidebar
        breakPoint="md"
        collapsed={collapsed}
        toggled={toggled}
        image="https://www.gstatic.com/mobilesdk/190424_mobilesdk/nav_nachos@2x.png"
        onBreakPoint={setBroken}
        backgroundColor={hexToRgba(
          themes[theme].sidebar.backgroundColor,
          hasImage ? 0.9 : 1
        )}
        onBackdropClick={() => setToggled(false)}
        rootStyles={{ border: 0 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <SidebarHeader
            rtl={rtl}
            style={{ marginBottom: "24px", marginTop: "16px" }}
          />

          <div style={{ flex: 1, marginBottom: "32px" }}>
            <Menu iconshape="square" menuItemStyles={menuItemStyles}>
              {/* <MenuItem
              icon={
                collapsed ? (
                  <IconButton onClick={() => setCollapsed(false)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                ) : null
              }
              style={{
                margin: "10px 0 20px 0",
                color: "gray",
              }}
            >
              {!collapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h3" fontWeight="bold" fontSize={14}>
                    PushPortal
                  </Typography>
                  <IconButton
                    onClick={
                      broken
                        ? () => setToggled(!toggled)
                        : () => setCollapsed(!collapsed)
                    }
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem> */}

              <div style={{ padding: "0 24px", marginBottom: "8px" }}>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  style={{
                    opacity: collapsed ? 0 : 0.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  General
                </Typography>
              </div>

              <Item
                title="Overview"
                to={`/project/${slug}/dashboard`}
                icon={<SpaceDashboardIcon />}
                selected={selected}
                setSelected={setSelected}
                pathname={pathname}
                slug={slug}
              />
              <Item
                title="Create"
                to={`/project/${slug}/campaigns`}
                icon={<SendIcon />}
                selected={selected}
                setSelected={setSelected}
                pathname={pathname}
                slug={slug}
              />
              {/* <Item
                title="History"
                to={`/project/${slug}/notifications`}
                icon={<TimelineIcon />}
                isActive={isActive}
                selected={selected}
                setSelected={setSelected}
                pathname={pathname}
                slug={slug}
              /> */}
              {/* <div
                style={{
                  padding: "0 24px",
                  marginBottom: "8px",
                  marginTop: "32px",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={600}
                  style={{
                    opacity: collapsed ? 0 : 0.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  Extra
                </Typography>
              </div> */}
              {/* <Menu menuItemStyles={menuItemStyles}>
                <MenuItem
                  icon={<CalendarMonthIcon />}
                  suffix={<Badge variant="success">New</Badge>}
                >
                  Calendar
                </MenuItem>
                <MenuItem icon={<LibraryBooksIcon />}>Documentation</MenuItem>
                <MenuItem disabled icon={<RssFeedIcon />}>
                  Examples
                </MenuItem>
              </Menu> */}
            </Menu>
          </div>
          <SidebarFooter collapsed={collapsed} />
        </div>
      </Sidebar>
    </Box>
  );
};

export default AsideSidebar;
