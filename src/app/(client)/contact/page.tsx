import ContactView from "@/components/contact/Contact.view";
import TopTitle from "@/components/general/TopTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Fastest way to contact me, and get reply in 24hrs",
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
        url: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1707486430/my-portfolio/contactt_ltpjbu.png",
        alt: "image of contact page",
      },
    ],
    card: "summary_large_image",
    title: "Tomiwa-codes",
    description: "Fastest way to contact me, and get reply in 24hrs",
    creator: "Tomiwa Ogunbase",
  },
  openGraph: {
    title: "Tomiwa-codes",
    description: "Fastest way to contact me, and get reply in 24hrs",
    url: "https://tomiwa-codes.vercel.app/about",
    siteName: "Tomiwa-codes",
    images: [
      {
        url: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1707486430/my-portfolio/contactt_ltpjbu.png",
        alt: "image of contact page",
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

const Contact = () => {
  return (
    <>
      <TopTitle
        title={"coontact"}
        bottomSubTitle={"Fastest way to"}
        topSubTitle={"Me"}
      />
      <ContactView />;
    </>
  );
};

export default Contact;
