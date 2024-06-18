import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import FaceIcon from "@mui/icons-material/Face";
import { Chip, Button } from "@mui/material";
import { addDashforspace, randomStr } from "../../../Utils/generateRandomUUID";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { stepOneSchema } from "../../../Utils/ZodSchema";


const StepOne = ({
  setOpenProjectDrawer,
  handleStepCount,
  projectName,
  setProjectName,
  random,
  setRandom,
}) => {
  const handleFormRequest = (e, count) => {
    e.preventDefault();
    try {
      stepOneSchema.parse(projectName);
      handleStepCount(count);
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
        <div className="img_wrapper">
          <img
            src="https://www.gstatic.com/mobilesdk/200107_mobilesdk/project_create_illo_welcome@2x.png"
            alt="img"
            height={"718px"}
            width={"568px"}
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
          <h1 className="header__title">Create a project (Step 1 of 2)</h1>
        </div>
      </div>
      <div className="content">
        <div className="create__project__content">
          <div className="form__wrapper">
            <form
              className="stepone__form"
              onSubmit={(e) => handleFormRequest(e, 2)}
            >
              <h2 className="stepone__form__heading">
                Lets start with a name for your project
              </h2>
              <div className="project__name">
                <label className="project__name__label" htmlFor="project__name">
                  Project name
                </label>
                <input
                  className="project__name__input"
                  name="project_name"
                  placeholder="Enter your project name"
                  value={projectName}
                  onChange={(e) => {
                    setProjectName(e.target.value);
                    setRandom(randomStr(6));
                  }}
                />
              </div>
              <div className="project__chips">
                <Chip
                  icon={<FaceIcon />}
                  label={
                    projectName.length > 0
                      ? addDashforspace(projectName).toLowerCase() +
                        "-" +
                        random
                      : "my-awesome-project-id"
                  }
                />
              </div>
              <div className="create__project__actions">
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

export default StepOne;
