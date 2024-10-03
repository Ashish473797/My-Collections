import ContactUsBanner from "./components/ContactUsBanner/ContactUsBanner";
import ContactHelpDesk from "./components/ContactHelpDesk/ContactHelpDesk";
import ContactQueryDesk from "./components/ContactQueryDesk/ContactQueryDesk";
import ContactFAQ from "./components/ContactFAQ/ContactFAQ";

export default function ContactUs() {
  return (
    <>
      <ContactUsBanner />
      <ContactHelpDesk />
      <ContactFAQ />
      <ContactQueryDesk />
    </>
  );
}
