import React from "react";
import { IconButton, Badge, Popover, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CommentIcon from "@mui/icons-material/Comment";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";

const NotificationTray = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "notification-popover" : undefined;

  return (
    <>
      <IconButton
        aria-describedby={id}
        aria-label="show notifications"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={3} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>
            <ListItemText
              primary="New Comment"
              secondary="John Doe commented on your post."
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText
              primary="New Message"
              secondary="You have a new message from Jane Smith."
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText
              primary="New Follower"
              secondary="Mary Johnson started following you."
            />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default NotificationTray;
