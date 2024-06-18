import Drawer from "@mui/material/Drawer";
import StepOne from "./Steps/StepOne";
import { useState } from "react";
import StepTwo from "./Steps/StepTwo";
import toast from "react-hot-toast";
import InfoIcon from "@mui/icons-material/Info";

const CreateProjectSlider = ({ OpenProjectDrawer, setOpenProjectDrawer }) => {
  const [stepCount, setStepCount] = useState(1);
  const [projectName, setProjectName] = useState("");
  const [random, setRandom] = useState("");
  const [appid, setappid] = useState("");

  // const createProject = async () => {
  //   const payload = new FormData();
  //   const session = getSession();
  //   payload.append("token", session.txt_token);
  //   payload.append("txt_employee_id", session.txt_employee_id);
  //   payload.append("session_platform", getBrowserOS());
  //   payload.append("txt_device_id", getBrowser());
  //   payload.append("txt_service_name", projectName);
  //   payload.append(
  //     "txt_service_uuid",
  //     addDashforspace(projectName).toLowerCase() + "-" + random
  //   );
  //   payload.append("txt_service_app_id", appid);
  //   payload.append("operation", "PORTAL_CREATE_SERVICE");
  //   payload.append("call_type", "PORTAL");

  //   try {
  //     let response = await createProjectCall(payload).unwrap();
  //     const { data, message } = responseParser(response);
  //     console.log({ data, message });
  //     toast.success(message);
  //   } catch (error) {
  //     toast.error(error.message);
  //   } finally {
  //     setOpenProjectDrawer(false);
  //     setappid("");
  //     setRandom("");
  //     setProjectName("");
  //     setStepCount(1);
  //   }
  // };

  const handleStepCount = (count) => {
    setStepCount(count);
  };

  return (
    <Drawer
      anchor={"right"}
      open={OpenProjectDrawer}
      PaperProps={{
        sx: {
          width: "100%",
        },
      }}
    >
      {stepCount === 1 ? (
        <StepOne
          setOpenProjectDrawer={setOpenProjectDrawer}
          handleStepCount={handleStepCount}
          setProjectName={setProjectName}
          projectName={projectName}
          random={random}
          setRandom={setRandom}
        />
      ) : stepCount === 2 ? (
        <StepTwo
          handleStepCount={handleStepCount}
          setOpenProjectDrawer={setOpenProjectDrawer}
          setappid={setappid}
          appid={appid}
          createProject={() => toast("Do db work here", {
                icon: <InfoIcon />,
          })}
        />
      ) : null}
    </Drawer>
  );
};

export default CreateProjectSlider;
