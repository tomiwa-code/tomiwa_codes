import { ProjectType } from "@/types/types";
import { getProjects } from "../../../sanity/sanity.query";
import ProjectView from "./Project.view";

const ProjectFetch = async () => {
  const profile: ProjectType[] = await getProjects();

  return <ProjectView projectData={profile} />;
};

export default ProjectFetch;
