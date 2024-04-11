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
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      utilities,
      projectimage,
      projectvideo,
      links,
      contribution,
    }`,
  );
}


export async function getSocialLinks() {
  return client.fetch(
    groq`*[_type == "profile"]{
      socialLinks,
    }`,
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
  );
}
