import React from "react";
import { ProfileType } from "@/types/types";
import { getProfile } from "../../../sanity/sanity.query";
import SocialLinks from "../general/SocialLinks";

const SocialFetch = async () => {
  const profile: ProfileType[] = await getProfile(); 

  return <SocialLinks profileData={profile} />
};

export default SocialFetch;
