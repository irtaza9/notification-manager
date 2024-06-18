import { getCookie } from "./Cookies";

export function getSession() {
  const session = getCookie("session");
  if (session) {
    return session;
  }
  return null;
}
