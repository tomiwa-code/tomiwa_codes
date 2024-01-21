import React, { Suspense } from "react";
import TopTitle from "@/components/general/TopTitle";
import ProjectFetch from "@/components/projects/Project.fetch";
import { Metadata } from 'next'
import Loading from "@/components/projects/Loading.fetch";
 
export const metadata: Metadata = {
  title: 'Projects',
}

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
