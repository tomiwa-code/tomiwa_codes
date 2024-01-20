import { ProfileType, SkillsType } from "@/types/types";
import { getProfile, getSkills } from "../../../sanity/sanity.query";
import AboutView from "./About.view";

const AboutFetch = async () => {
  const profile: ProfileType[] = await getProfile(); 
  const skills: SkillsType[] = await getSkills(); 

  return <AboutView profileData={profile} skillsData={skills}  />;
};

export default AboutFetch;
