import "./style.css";
import { Link, useLocation, useParams } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useRef, useState } from "react";

const FeatureMenu = ({ menuoptions, params }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [visibleFeatures, setVisibleFeatures] = useState(menuoptions || []);
  const [hiddenFeatures, setHiddenFeatures] = useState([]);
  const navbarRef = useRef(null);
  let { slug } = useParams();
  let { pathname } = useLocation();
  let trimmedUrl = pathname.replace(/\/$/, "");

  useEffect(() => {
    const handleResize = () => {
      const currentIsMobile = window.innerWidth <= 768;
      setIsMobile(currentIsMobile);

      const navbarWidth = navbarRef.current.offsetWidth;
      const featureWidth = 100;

      if (currentIsMobile) {
        const maxVisibleFeatures = Math.floor(navbarWidth / featureWidth) - 1;
        setVisibleFeatures(menuoptions.slice(0, maxVisibleFeatures));
        setHiddenFeatures(menuoptions.slice(maxVisibleFeatures));
      } else {
        setVisibleFeatures(menuoptions);
        setHiddenFeatures([]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuoptions]);

  return (
    <nav className="feature__nav" ref={navbarRef}>
      <ul className="feature__nav__ul">
        {visibleFeatures.map((feature) => {
          let featurePath = `/project/${slug}/${feature.path}`;
          let isActive;

          if (params === "true") {
            isActive = feature.name === "Scheduled";
          } else {
            isActive =
              featurePath === trimmedUrl ||
              (trimmedUrl === `/project/${slug}/notifications/new` &&
                featurePath === `/project/${slug}/campaigns`);
          }

          return (
            <li className="feature__nav__ul__li" key={feature.name}>
              <Link
                to={featurePath}
                className={isActive ? "active" : undefined}
              >
                {feature.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {isMobile && hiddenFeatures.length > 0 && (
        <div className="feature__nav__mobile">
          <div className="feature__nav__mobile btn_group">
            <button className="feature__nav__mobile__more__btn">
              <span
                className="feature__nav__mobile__more"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                More
              </span>
              <ArrowDropDownIcon />
            </button>
            {mobileMenuOpen && (
              <ul className="feature__nav__mbl_ul">
                {hiddenFeatures.map((feature) => (
                  <li className="feature__mbl_nav__ul__li" key={feature.name}>
                    <Link
                      to={`/project/${slug}/${feature.path}`}
                      className={
                        pathname === `/project/${slug}/${feature.path}`
                          ? "active"
                          : undefined
                      }
                    >
                      {feature.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default FeatureMenu;
