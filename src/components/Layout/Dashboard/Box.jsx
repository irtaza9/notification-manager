import { Box } from "@mui/material";

const CustomBox = ({ children }) => {
  return (
    <Box flexGrow={1} bgcolor={"#F6F7F8"} minHeight={"100vh"} padding={2}>
      {children}
    </Box>
  );
};

export default CustomBox;
