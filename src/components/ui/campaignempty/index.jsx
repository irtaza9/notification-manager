import { Link } from "react-router-dom";
import "./style.css"
const Emptycampaign = () => {
  return (
    <>
      <div className="sc-ksZaOG hCOyXA" id="campaign-empty-state">
        <div className="sc-cBIcHg ikYnpL">
          <div className="sc-kHneYr hPmZMf">
            <img
              src="https://dashboard.onesignal.com/assets/empty_messages_campaign-33207858.svg"
              alt="Messages being sent"
            />
          </div>
          <h3 className="sc-gOPDNC gvlvSy">
            You have not sent any messages through the dashboard yet 🤔
          </h3>
          <p>
            Messages sent through our API or WordPress Plugin can be found in{" "}
            <Link className="sc-iIPllB dFUYgI" to={""}>
              <span>Delivery</span>
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Emptycampaign;
