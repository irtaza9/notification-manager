import { useSearchParams, useNavigate } from "react-router-dom";
import "./style.css";
const CampaignTabs = () => {
  const [searchParams] = useSearchParams();
  let queryparamvalue = searchParams.get("tab");
  const navigate = useNavigate();
  const isFirstButtonActive =
    queryparamvalue !== "sent" && queryparamvalue !== "drafts";

  return (
    <nav className="sc-hJYyEF kgVgNB">
      <ul className="sc-fMpdUm zCYCx">
        <li className="sc-uyLif hbxymc">
          <button
            className={`sc-bMthRQ ${isFirstButtonActive ? "khiCGb" : "gWioKO"}`}
            onClick={() => navigate("?tab=all")}
          >
            <span className="sc-ifmBRf iuYiXR">All</span>
          </button>
        </li>
        <li className="sc-uyLif hbxymc">
          <button
            className={`sc-bMthRQ ${
              queryparamvalue === "sent" ? "khiCGb" : "gWioKO"
            }`}
            onClick={() => navigate("?tab=sent")}
          >
            <span className="sc-ifmBRf iuYiXR">Sent</span>
          </button>
        </li>

        <li className="sc-uyLif hbxymc">
          <button
            className={`sc-bMthRQ ${
              queryparamvalue === "drafts" ? "khiCGb" : "gWioKO"
            }`}
            onClick={() => navigate("?tab=drafts")}
          >
            <span className="sc-ifmBRf iuYiXR">Drafts</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default CampaignTabs;
