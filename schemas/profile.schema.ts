import { BiUser } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { BsEnvelope, BsInstagram, BsPhone, BsTwitter, BsWhatsapp } from "react-icons/bs";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    {
      name: "profileImage",
      title: "Profile Image",
      type: "string",
      initialValue: "https://",
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "bottomText",
      title: "slogan or word of inspiring",
      type: "string"
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "github",
          title: "Github URL",
          type: "url",
          initialValue: "https://github.com/tomiwa-code",
          icon: FiGithub,
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://www.linkedin.com/in/ayoola-ogunbase-96694715b",
          icon: TfiLinkedin,
        },
        {
          name: "twitter",
          title: "Twitter URL",
          type: "url",
          initialValue: "https://www.twitter.com/crownkvnq",
          icon: BsTwitter,
        },
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
          initialValue: "https://www.instagram.com/crown.kvnq",
          icon: BsInstagram,
        },
      ],
    },
    {
      name: "contacts",
      title: "Contacts",
      type: "object",
      description: "Add a way you can be contacted:",
      fields: [
        {
          name: "phone",
          title: "Phone number",
          type: "string",
          icon: BsPhone,
        },
        {
          name: "email",
          title: "Email address",
          type: "string",
          icon: BsEnvelope,
        },
        {
          name: "whatsapp",
          title: "WhatsApp link",
          type: "url",
          icon: BsWhatsapp,
        },
      ],
    },
  ],
};

export default profile;
