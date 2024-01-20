import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "tomiwa_code_api",
  projectId: "tpr1dl0v",
  dataset: "production",
  basePath: "/tomiwacodesadmin",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
