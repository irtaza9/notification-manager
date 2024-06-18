import { useEffect, useState } from "react";
import { getSession } from "../../Utils/getUserSession";
import { useLocation } from "react-router-dom";

export function useAuth() {
  const [isloading, setisloading] = useState(true);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const session = getSession();
    if (session) {
      // you can do api call here
      setisAuthenticated(true);
      setisloading(false);
    } else {
      setisAuthenticated(false);
      setisloading(false);
    }
  }, [pathname]);

  return { isloading, isAuthenticated };
}
