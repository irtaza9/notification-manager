import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../Utils/Cookies";
import { toast } from "react-hot-toast";
import Head from "../../../components/Head/Head";
import { z } from "zod";

const AuthOTP = () => {
  const navigate = useNavigate();
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        setCookie("session", 'session');
        setTimeout(() => {
          navigate("/");
        }, [1000]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0]?.message);
      } else {
        toast.error(error.status);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Head
        title={"OTP | Push Portal"}
        description="Beginner friendly page for learning React Helmet."
        name="Nayatel Pvt. Ltd"
        type="Login to Push Notification"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          OTP
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="OTP"
            name="txt_pin"
            type="password"
            autoComplete="current-otp"
            value='otp'
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthOTP;
