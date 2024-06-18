import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AuthSvg from "../../../assets/auth-illustration.svg";
export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
        height: '100vh',
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Box
              component={Link}
              to={"#"}
              sx={{
                display: "inline-flex",
                height: 32,
                width: 32,
              }}
            >
              <img src="/favicon.png" alt="favicon" />
            </Box>
          </Box>
          {children}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: "center",
            background:
              "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: "24px",
                lineHeight: "32px",
                mb: 1,
              }}
              variant="h1"
            >
              Welcome to{" "}
              <Box component={Link} sx={{ color: "#15B79E" }} target="_blank">
                {import.meta.env.VITE_ORG}
              </Box>
            </Typography>
            <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
              Push the notification from one location
            </Typography>
            <img alt="auth-illustration" src={AuthSvg} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
