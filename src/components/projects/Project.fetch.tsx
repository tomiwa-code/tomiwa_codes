import { ProjectType } from "@/types/types";
import { getProjects } from "../../../sanity/sanity.query";
import ProjectView from "./Project.view";

const ProjectFetch = async () => {
  const projects: ProjectType[] = await getProjects();

  return <ProjectView projectData={projects} />;
};

export default ProjectFetch;
