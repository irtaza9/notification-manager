import { useParams } from "react-router-dom";
import "./style.css";
const IOSPreview = ({ description }) => {
  const { slug } = useParams();
  return (
    <div className="ikKVrF">
      <div className="efLqsg">
        <div className="bbeiNz">
          <div className="pDPcv">
            <div className="kTWQkQ">
              <div className="RiVsC">
                <div className="csuJII"></div>
              </div>
            </div>
            <div className="iKwcfS">
              <h2 className="fAerKm"></h2>
              <div className="jdisGf">
                <h2 className="fAerKm">from {slug}</h2>
                <p className="cKAxHd">
                  {description ? description : "Default message"}
                </p>
              </div>
            </div>
            <div className="sc-feINqK jpHdxW">
              <div className="hfhcD">now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSPreview;
