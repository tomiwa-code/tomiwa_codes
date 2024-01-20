import React from "react";
import LandingPage from "./LandingPage";
import { HeroType } from "@/types/types";
import { getHero } from "../../../sanity/sanity.query";

const HomeFetch = async () => {
  const hero: HeroType[] = await getHero();

  return <LandingPage heroData={hero} />;
};

export default HomeFetch;
