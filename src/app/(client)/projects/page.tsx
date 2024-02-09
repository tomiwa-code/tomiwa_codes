import React, { Suspense } from "react";
import TopTitle from "@/components/general/TopTitle";
import ProjectFetch from "@/components/projects/Project.fetch";
import { Metadata } from "next";
import Loading from "@/components/projects/Loading.fetch";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I have worked on so far",
  metadataBase: new URL("https://tomiwa-codes.vercel.app/projects"),
  referrer: "origin-when-cross-origin",
  keywords: [
    "Tomiwa-codes",
    "Tomiwa",
    "Ogunbase",
    "Ayoola",
    "Adetomiwa",
    "tomiwa code projects",
    "Trending portfolio",
    "Web developer portfolio",
    "portfolio",
    "portfolio inspiration",
    "Portfolio website",
  ],
  authors: [
    { name: "Tomiwa" },
    { name: "Tomiwa", url: "https://tomiwa-codes.vercel.app/about" },
  ],
  creator: "Tomiwa Ogunbase",
  twitter: {
    images: [
      {
        url: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1707485386/my-portfolio/projects_ygg7aq.png",
        alt: "image of the project page",
      },
    ],
    card: "summary_large_image",
    title: "Tomiwa-codes",
    description: "Projects I have worked on so far",
    creator: "Tomiwa Ogunbase",
  },
  openGraph: {
    title: "Tomiwa-codes",
    description: "Projects I have worked on so far",
    url: "https://tomiwa-codes.vercel.app/projects",
    siteName: "Tomiwa-codes",
    images: [
      {
        url: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1707485386/my-portfolio/projects_ygg7aq.png",
        alt: "image of the project page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export const dynamic = "force-dynamic";

const Projects = () => {
  return (
    <>
      <TopTitle
        topSubTitle={"Some of the"}
        title={"proojects"}
        bottomSubTitle={"I've worked on so far"}
      />

      <Suspense fallback={<Loading />}>
        <ProjectFetch />
      </Suspense>

      <p className="text-xs text-gray-400 pb-12 md:pb-20 text-center w-2/4 mx-auto">
        Let me handle your projects and you&apos;ll be amazed.
      </p>
    </>
  );
};

export default Projects;
