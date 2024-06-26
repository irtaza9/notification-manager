export function getBrowser() {
  navigator.sayswho = (function () {
    var ua = navigator.userAgent;
    var tem;
    var M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return "IE " + (tem[1] || "");
    }
    if (M[1] === "Chrome") {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(" ");
  })();

  return navigator.sayswho;
}

export function getBrowserOS() {
  let OS_name = "Unknown Platform";
  if (navigator.appVersion.indexOf("Win") != -1) OS_name = "Windows OS";
  if (navigator.appVersion.indexOf("Mac") != -1) OS_name = "MacOS";
  if (navigator.appVersion.indexOf("X11") != -1) OS_name = "UNIX OS";
  if (navigator.appVersion.indexOf("Linux") != -1) OS_name = "Linux OS";
  return OS_name;
}
