import { Navigate, Outlet } from "react-router-dom";
import { removeCookie } from "../../../Utils/Cookies";
import Loader from "../../Loader";
import { useAuth } from "../../hooks/useAuth";

const PublicRoutesGuard = () => {
  const { isAuthenticated, isloading } = useAuth();

  if (isloading) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  } else {
    removeCookie("_pSession");
    return <Outlet />;
  }
};

export default PublicRoutesGuard;
