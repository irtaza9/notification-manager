import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: "5px" }}>
        {title}
      </Typography>
      <Typography variant="h6">{subtitle}</Typography>
    </Box>
  );
};

export default Header;
