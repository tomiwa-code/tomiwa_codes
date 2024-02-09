import AboutFetch from "@/components/about/About.fetch";
import Loading from "@/components/about/Loading.fetch";
import TopTitle from "@/components/general/TopTitle";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "My name is AYOOLA ADETOMIWA OGUNBASE, I create stunning websites.",
  metadataBase: new URL("https://tomiwa-codes.vercel.app/about"),
  referrer: "origin-when-cross-origin",
  keywords: [
    "Tomiwa-codes",
    "Tomiwa",
    "Ogunbase",
    "Ayoola",
    "Adetomiwa",
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
        url: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705699926/my-portfolio/WhatsApp_Image_2024-01-19_at_22.04.19_txrz54.jpg",
        alt: "image of tomiwa",
      },
    ],
    card: "summary_large_image",
    title: "Tomiwa-codes",
    description:
      "My name is AYOOLA ADETOMIWA OGUNBASE, I create stunning websites.",
    creator: "Tomiwa Ogunbase",
  },
  openGraph: {
    title: "Tomiwa-codes",
    description:
      "My name is AYOOLA ADETOMIWA OGUNBASE, I create stunning websites.",
    url: "https://tomiwa-codes.vercel.app/about",
    siteName: "Tomiwa-codes",
    images: [
      {
        url: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705699926/my-portfolio/WhatsApp_Image_2024-01-19_at_22.04.19_txrz54.jpg",
        alt: "image of tomiwa",
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
