import { useParams } from "react-router-dom";
import "./style.css";
const AndroidPreview = ({ toggle, settoggle, title, description }) => {
  const { slug } = useParams();
  return (
    <div className="fgpobQ">
      <div className="dRkjYX">
        <div className={!toggle ? "fRZlcR" : "jRAwQb"}>
          <div className={!toggle ? "cJQreS" : "cJQreS"}>
            <div className={!toggle ? "fKcHZf" : "fKcHZf"}>
              <span className={!toggle ? "gCNqN" : "gCNqN"}></span>
            </div>
          </div>
          <header className={!toggle ? "dFdfIe" : "dBEEaN"}>
            <div className={!toggle ? "jkTqvm" : "jkTqvm"}>
              {!toggle ? (
                <h1 className="dzJOeW">{title ? title : "title"} {" "}</h1>
              ) : null}
              {"  "}
              <span className="kbkDyH">{slug} • now</span>
            </div>
            {!toggle ? (
              <div className="ePuxWV">
                {description ? description : "Hey, Your default description"}
              </div>
            ) : null}
          </header>

          <div className="gybsVG" onClick={() => settoggle(!toggle)}>
            <span className={!toggle ? "bfcrvy" : "hPwLGz"}></span>
          </div>

          {toggle ? (
            <>
              <h1 className="dzJOeZ">{title ? title : "title "}</h1>
              <div className="ePuxWQ">
                {description ? description : "Hey, Your default description"}
              </div>
              <img
                src="https://img.onesignal.com/tmp/aacfe56e-c56e-4484-bfd8-18c939526d0a/uNXv04GnQOiIFWlz17Qp_woman-at-desktop2x.png"
                className="kOfOTp"
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AndroidPreview;
