import Head from "../../components/Head/Head";
import "./style.css";
import React from "react";
import Projects from "../../components/ProjectCards";
import Navbar from "../../components/globals/Navbar/LandingPageNavigation/Navbar";
import Loader from "../../components/Loader";
import { useProjectData } from "../../components/hooks/useProjectData";
import { toast } from "react-hot-toast";
import InfoIcon from "@mui/icons-material/Info";

const ProjectList = () => {
  const { projects, isLoading } = useProjectData();

  if (isLoading) {
    return <Loader />;
  }
  
  return (
    <React.Fragment>
      <Navbar />
      <Head
        title={"Push Notification - All Services"}
        description="Beginner friendly page for learning React Helmet."
        name="Nayatel Pvt. Ltd"
        type="All Services"
      />
      {projects?.all_services?.length > 0 ? (
        <>
          <div className="bg__image__container">
            <div className="bg__image" />
          </div>
          <div style={{ backgroundColor: "#f6f7f9", height: 90 }}>
            <div className="__wrapper">
              <Projects
                title={"Recent projects"}
                Projects={projects?.recent_services || []}
                isShow={true}
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              />
              <Projects
                title={"All projects"}
                Projects={projects?.all_services || []}
                isShow={false}
                style={{ color: "black", fontWeight: "bold" }}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg__image__container_welcome">
            <div className="bg__image__container_welcome_wrapper">
              <div className="bg__image_welcome" />
              <div className="feature-bar-content">
                <div className="welcome-message">
                  <div className="msg_wrap">
                    <h2 className="msg_title">
                      Welcome to Nayatel Push Portal!
                    </h2>
                    <div className="subtitle">
                      Tools from Google for building app infrastructure,
                      improving app quality and growing your business
                    </div>
                    <div className="btn_wrap">
                      <button
                        className="create-project-button"
                        onClick={() => {
                          toast("This feature is currently not available!", {
                            icon: <InfoIcon />,
                          });
                        }}
                      >
                        Create a project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default ProjectList;
