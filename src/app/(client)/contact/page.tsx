import ContactView from "@/components/contact/Contact.view";
import TopTitle from "@/components/general/TopTitle";

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
