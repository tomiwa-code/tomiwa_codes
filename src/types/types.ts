export type TopTitleType = {
  topSubTitle: string;
  title: string;
  bottomSubTitle: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  utilities: string;
  projectimage: string;
  projectvideo: string;
  links: { github: string; site: string };
  contribution: [];
};

export type HeroType = {
  _id: string;
  firstText: string;
  github: string;
  heroText1: string;
  heroText2: string;
  resumeURL: { _type: string; asset: { _ref: string; _type: string } };
  secondText: string;
};

export type ProfileType = {
  _id: string;
  bottomText: string;
  profileImage: string;
  location: string;
  socialLinks: { github: string; instagram: string; linkedin: string; twitter: string};
  contacts: { email: string; phone: string; whatsapp: string};
  shortBio: string,
};

export type SkillsType = {
  _id: string;
  category: string;
  subgroup: string;
  title: string;
};
