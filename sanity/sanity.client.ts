import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "tpr1dl0v",
  dataset: "production",
  apiVersion: "2023-10-31",
  useCdn: false,
};

const client = createClient(config);

export const urlForPDF = (pdfReference: {
  _type: string;
  asset: { _ref: string; _type: string };
}) => {
  if (
    pdfReference &&
    pdfReference._type === "file" &&
    pdfReference.asset &&
    pdfReference.asset._ref
  ) {
    const pdfIdWithPrefix = pdfReference.asset._ref;
    const pdfId = pdfIdWithPrefix.replace(/^file-|(-pdf)$/g, "");
    return `https://cdn.sanity.io/files/${config.projectId}/${config.dataset}/${pdfId}.pdf`;
  }
  return "#";
};

export default client;
