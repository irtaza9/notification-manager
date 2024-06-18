import { IconButton, Tooltip } from "@mui/material";

const IconsTooltip = ({ children, title, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton size="large" aria-label={title} onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default IconsTooltip;
