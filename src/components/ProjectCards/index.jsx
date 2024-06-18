import { Box } from "@mui/material";
import CreateNewProject from "./CreateNewProjectCard";
import ProjectItemCard from "./ProjectsItemCard";

const Projects = ({ title, Projects, style, isShow }) => {
  return (
    <>
      <Box className="title card-ng-margin" style={style}>
        {title}
      </Box>
      {isShow && <CreateNewProject />}
      {Projects.map((project, i) => (
        <ProjectItemCard
          key={i}
          project={project}
          style={{ flexBasis: "33.33%" }}
        />
      ))}
    </>
  );
};

export default Projects;
