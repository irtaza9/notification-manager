import { Navigate, Outlet, useParams } from "react-router-dom";
import { useProjectData } from "../../hooks/useProjectData";
import Loader from "../../Loader";

const ProjectGuard = () => {
  const { slug } = useParams();
  const { projects, isLoading } = useProjectData();

  if (isLoading) {
    return <Loader />;
  }

  if (!projects.all_services.some((item) => item.txt_service_uuid === slug)) {
    return <Navigate to={"/"} />;
  } else {
    return <Outlet />;
  }
};

export default ProjectGuard;
