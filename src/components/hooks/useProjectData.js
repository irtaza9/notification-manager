import { useState } from "react";
import { AllProjects, RecentProjects } from "../../Utils/projects";

export function useProjectData() {
  const [projects] = useState({
    all_services: AllProjects,
    recent_services: RecentProjects,
  });
  const [isLoading] = useState(false);

  return { projects, isLoading };
}
