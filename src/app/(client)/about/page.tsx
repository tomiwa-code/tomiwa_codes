import AboutFetch from "@/components/about/About.fetch";
import Loading from "@/components/about/Loading.fetch";
import TopTitle from "@/components/general/TopTitle";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'About',
}

export const dynamic = "force-dynamic";

const About = () => {
  return (
    <>
      <TopTitle title={"aboout"} topSubTitle={"Brief"} bottomSubTitle={"Me"} />

      <Suspense fallback={<Loading />}>
        <AboutFetch />
      </Suspense>
    </>
  );
};

export default About;
