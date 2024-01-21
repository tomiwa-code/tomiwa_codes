import ContactView from "@/components/contact/Contact.view";
import TopTitle from "@/components/general/TopTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
}

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
