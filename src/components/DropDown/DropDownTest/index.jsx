import { useEffect, useState, useRef } from "react";
import listenForOutsideClick from "../withClickOutside";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";

function DropDownTest({ options, menutype, style, setselectedView }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const [chosenVal, initChosenVal] = useState(
    menutype === "dayfilter"
      ? "24 Hours"
      : menutype === "platformfilter"
      ? "Android"
      : menutype === "channel"
      ? "Android"
      : menutype === "pushpreview"
      ? "Android"
      : menutype === "ShortCutMenuOption"
      ? "New Message"
      : "MENU_TYPE_NOT_RECEIVED"
  );

  const getSelectedEl = (val) => {
    if (menutype === "pushpreview") {
      setselectedView(val);
    }
    return initChosenVal(val);
  };

  const toggle = (isOpen) => {
    return setIsOpen(!isOpen);
  };
  const [listening, setListening] = useState(false);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));
  return (
    <>
      <div ref={menuRef} className="cWdTgB">
        <button
          className={`${
            menutype === "ShortCutMenuOption" ? "jbFgWI" : "cYSewD"
          }`}
          onClick={() => {
            toggle(isOpen);
          }}
          id="create-message-dropdown"
        >
          {menutype === "dayfilter" ? (
            <>
              <DateRangeIcon className="kLkPUM" />
            </>
          ) : menutype === "ShortCutMenuOption" ? (
            <>
              <AddCircleIcon className="kLkPUM" />
            </>
          ) : (
            <>
              <StayCurrentPortraitIcon className="kLkPUM" />
            </>
          )}
          <span className="gYCGXc">{chosenVal}</span>
          <ArrowDropDownIcon className="kLkPUM" />
        </button>

        {isOpen && (
          <ul className="sc-hAsxaJ jfoxNC dropdown-menu" style={style}>
            {options.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    getSelectedEl(item.label);
                  }}
                  className={chosenVal === item.label ? "active" : ""}
                >
                  {["dayfilter", "platformfilter", "pushpreview"].includes(
                    menutype
                  ) ? (
                    <>
                      <span className="sc-dkdnUF jSJoFW bwIehr">
                        {item.label}
                      </span>
                    </>
                  ) : (
                    <Link className="jSJoFW" to={`/project/${item?.value}`}>
                      <span className="sc-dkdnUF bwIehr">{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
            {menutype === "ShortCutMenuOption" && (
              <>
                <li role="separator" className="eKCYjN"></li>
                <li onClick={() => navigate("/")}>
                  <div
                    className="jSJoFW"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <AddIcon />
                    <span className="sc-dkdnUF bwIehr">New Project</span>
                  </div>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </>
  );
}
export default DropDownTest;
