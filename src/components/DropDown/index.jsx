import "./style.css";
import { useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate, useParams, Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useProjectData } from "../hooks/useProjectData";

const Dropdown = ({ style, featuremenu, newmessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  let { slug } = useParams();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const { projects } = useProjectData();

  const handleDropdown = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropbtn" onClick={handleDropdown}>
        {featuremenu && !newmessage ? slug : "New Messages"}
        <ArrowDropDownIcon
          className={`dropdown-icon ${isOpen ? "open" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="dropdown-content" style={style}>
          <div className="dropdown__content__project__wrapper">
            <div className="dropdown__projects">
              <ul className="dropdown__projects__ul">
                {projects?.all_services?.map((project, index) => (
                  <span onClick={() => setIsOpen(false)} key={index}>
                    <Link
                      to={`/project/${project?.txt_service_uuid}/dashboard`}
                    >
                      {project?.txt_service_name}
                    </Link>
                  </span>
                ))}
              </ul>
            </div>

            <div className="button__wrapper">
              <div className="button__addProject" onClick={() => navigate("/")}>
                <AddIcon />
                <span>New Project</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
