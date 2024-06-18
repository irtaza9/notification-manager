import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  CssBaseline,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Layout as AuthLayout } from "../../../components/Layout/Auth/AuthLayout";
import Head from "../../../components/Head/Head";
import { toast } from "react-hot-toast";
import { z } from "zod";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      navigate("/auth-otp");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0]?.message);
      } else {
        toast.error(error.status);
      }
    }
  };

  return (
    <AuthLayout>
      <CssBaseline />
      <Head
        title={"Login | Push Portal"}
        description="Beginner friendly page for learning React Helmet."
        name="Nayatel Pvt. Ltd"
        type="Login to Push Notification"
      />
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link to={"#"}>Register</Link>
              </Typography>
            </Stack>
            <Tabs sx={{ mb: 3 }} value={"credentials"}>
              <Tab label="Credentials" value="credentials" />
            </Tabs>
            <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Username"
                  name="txt_employee_id"
                  autoComplete="txt_employee_id"
                  autoFocus
                  required
                  value='demo'
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="txt_employee_password"
                  autoComplete="txt_employee_password"
                  type="password"
                  required
                  value='demo'
                />
              </Stack>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
              <Button fullWidth size="large" sx={{ mt: 3 }}>
                forget password
              </Button>
            </Box>
          </div>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default Login;
