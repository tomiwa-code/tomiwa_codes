import { groq } from "next-sanity";
import { client } from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      profileImage,
      bottomText,
      location,
      shortBio,
      fullBio,
      contacts,
      socialLinks,
    }`,
    { next: { revalidate: 60 } }
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      name,
      slug,
      utilities,
      projectimage,
      projectvideo,
      links,
      contribution,
    }`,
    { next: { revalidate: 60 } }
  );
}

export async function getSocialLinks() {
  return client.fetch(
    groq`*[_type == "profile"]{
      socialLinks,
    }`,
    { next: { revalidate: 60 } }
  );
}

export async function getHero() {
  return client.fetch(
    groq`*[_type == "hero"]{
      _id,
      firstText,
      github,
      heroText1,
      heroText2,
      resumeURL,
      secondText
    }`,
    { next: { revalidate: 60 } }
  );
}

export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skills"]{
      _id,
      category,
      subgroup,
      title,
    }`,
    { next: { revalidate: 60 } }
  );
}
