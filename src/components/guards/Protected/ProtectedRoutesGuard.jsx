import { Navigate, Outlet } from "react-router-dom";
import { removeCookie } from "../../../Utils/Cookies";
import Loader from "../../Loader";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoutesGuard = () => {
  const { isloading, isAuthenticated } = useAuth();

  if (isloading) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    console.log("/auth-login")
    removeCookie("_pSession");
    return <Navigate to={"/auth-login"} />;
  }
};

export default ProtectedRoutesGuard;
