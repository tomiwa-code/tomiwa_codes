const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 100 },
    },
    {
      name: "utilities",
      title: "Utilities",
      type: "string",
    },
    {
      name: "projectimage",
      title: "Project Image",
      type: "url",
      initialValue: "https://",
    },
    {
      name: "projectvideo",
      title: "Video Url",
      type: "url",
      initialValue: "https://",
    },
    {
      name: "links",
      title: "Project links",
      type: "object",
      description: "Add your project links:",
      fields: [
        {
          name: "site",
          title: "Site Url",
          type: "url",
          initialValue: "https://",
        },
        {
          name: "github",
          title: "Github Url",
          type: "url",
          initialValue: "https://",
        },
      ],
    },
    {
      name: "contribution",
      title: "Contributed",
      description: "Add a list of people who contributed",
      type: "array",
      of: [{ type: "string" }],
      initialValue: "https://",
    },
  ],
};

export default project;
