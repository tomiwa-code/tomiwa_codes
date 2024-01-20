import { ThemeProvider } from "@/context/Theme.Context";
import "../globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/general/Navbar";
import Switcher from "@/components/general/Switcher";
import Wrapper from "@/components/general/Wrapper";
import SocialFetch from "@/components/home/Social.Fetch";

const StretchPro = localFont({
  src: "../../utils/StretchPro.otf",
  variable: "--StretchPro",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tomiwa.codes",
    default: "Tomiwa.codes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${StretchPro.variable}`}>
        <ThemeProvider>
          <Wrapper>
            <Navbar />
            <Switcher />
            <SocialFetch />
            {children}
          </Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
