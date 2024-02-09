import HomeFetch from "@/components/home/Home.fetch";
import Loading from "@/components/home/Loading.fetch";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  description: "Tomiwa.codes portfolio | Home",
  title: "Home | Tomiwa.codes",
  // generator: "Next.js",
  // applicationName: "Next.js",
  // referrer: "origin-when-cross-origin",
  // keywords: [
  //   "Tomiwa.codes",
  //   "Tomiwa",
  //   "Ogunbase",
  //   "Ayoola",
  //   "Adetomiwa",
  //   "Trending portfolio",
  //   "Web developer portfolio",
  //   "portfolio",
  //   "portfolio inspiration",
  // ],
  // authors: [
  //   { name: "Tomiwa" },
  //   { name: "Tomiwa", url: "https://tomiwa-codes.vercel.app" },
  // ],
  // creator: "Tomiwa ogunbase",
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  // openGraph: {
  //   title: "Next.js",
  //   description: "The React Framework for the Web",
  //   url: "https://nextjs.org",
  //   siteName: "Next.js",
  //   images: [
  //     {
  //       url: "https://nextjs.org/og.png",
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: "https://nextjs.org/og-alt.png",
  //       width: 1800,
  //       height: 1600,
  //       alt: "My custom alt",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
};

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div
      className={`h-screen flex flex-col items-center justify-center relative`}
    >
      <Suspense fallback={<Loading />}>
        <HomeFetch />
      </Suspense>
    </div>
  );
}
