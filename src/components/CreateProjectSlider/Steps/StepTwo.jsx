import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { steptwoSchema } from "../../../Utils/ZodSchema";

const StepTwo = ({
  setOpenProjectDrawer,
  handleStepCount,
  setappid,
  appid,
  createProject,
}) => {
  const handleFormRequest = (e) => {
    e.preventDefault();
    try {
      steptwoSchema.parse(appid);
      createProject();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0]?.message);
      } else {
        toast.error(error.status);
      }
    }
  };
  return (
    <div className="container">
      <div className="sidebar">
        <div className="img_wrapper_step2">
          <img
            src="https://www.gstatic.com/mobilesdk/200110_mobilesdk/project_create_illo_middle@2x.png"
            alt="img"
            height={"362px"}
            width={"474px"}
          />
        </div>
      </div>
      <div className="header">
        <div className="header__crossbtn__wrapper">
          <div
            className="header__crossbtn"
            onClick={() => setOpenProjectDrawer(false)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="header__title__wrapper">
          <h1 className="header__title">Create a project (Step 2 of 2)</h1>
        </div>
      </div>
      <div className="content">
        <div className="create__project__content">
          <div className="form__wrapper">
            <form className="stepone__form" onSubmit={handleFormRequest}>
              <h2 className="stepone__form__heading">
                Lets start with a name for your project
              </h2>
              <div className="project__name">
                <label className="project__name__label" htmlFor="project__name">
                  OneSignal App-ID
                </label>
                <input
                  className="project__name__input"
                  placeholder="Enter your App-ID"
                  value={appid}
                  onChange={(e) => setappid(e.target.value)}
                />
              </div>

              <div className="create__project__actions">
                <div onClick={() => handleStepCount(1)}>
                  <KeyboardBackspaceIcon />
                </div>
                <Button
                  sx={{ height: "56px", width: "216px" }}
                  variant="contained"
                  type="submit"
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
