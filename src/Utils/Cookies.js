import Cookies from "js-cookie";

export const setCookie = (cookiename, token) => {
  const inTweentyFourHours = new Date(new Date().getTime() + 1440 * 60 * 1000);
  Cookies.set(cookiename, token, {
    expires: inTweentyFourHours,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export const removeCookie = (cookiename) => {
  Cookies.remove(cookiename);
};

export const getCookie = (cookiename) => {
  return Cookies.get(cookiename);
};
