import HomeFetch from "@/components/home/Home.fetch";
import Loading from "@/components/home/Loading.fetch";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomiwa-codes.vercel.app"),
  description: "Tomiwa-codes portfolio | Home",
  title: "Home | Tomiwa-codes",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Tomiwa-codes",
    "Tomiwa",
    "Ogunbase",
    "Ayoola",
    "Adetomiwa",
    "tomiwa code homepage",
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
        url: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1679864150/my-portfolio/my-portfolio_xtjnnj.png",
        alt: "image of the homepage",
      },
    ],
    card: "summary_large_image",
    title: "Tomiwa-codes",
    description: "Tomiwa-codes portfolio | Home",
    creator: "Tomiwa Ogunbase",
  },
  openGraph: {
    title: "Tomiwa-codes",
    description: "Tomiwa-codes portfolio | Home",
    url: "https://tomiwa-codes.vercel.app",
    siteName: "Tomiwa-codes",
    images: [
      {
        url: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1679864150/my-portfolio/my-portfolio_xtjnnj.png",
        alt: "image of the homepage",
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
