import { useEffect, useState } from "react";
import "./navbar.css";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../../../Utils/Cookies";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    removeCookie("session");
    navigate("/auth-login");
  };

  return (
    <nav className={`navbar ${isScrolled ? "shadow" : ""}`}>
      <Box className="logo">
        <img
          src={
            "https://nayatel.com/wp-content/uploads/2016/03/favicon-32x32.png"
          }
          height={"28px"}
          alt="Brand Logo"
          className="brand__logo"
        />
        <span className="brand__name">Logo</span>
      </Box>
      <Box className="links">
        <HelpIcon />
        <span onClick={logout} className="logout__icon">
          <LogoutIcon />
        </span>
      </Box>
    </nav>
  );
};

export default Navbar;
