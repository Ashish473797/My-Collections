import ContactUsBanner from "./components/ContactUsBanner/ContactUsBanner";
import ContactHelpDesk from "./components/ContactHelpDesk/ContactHelpDesk";
import ContactQueryDesk from "./components/ContactQueryDesk/ContactQueryDesk";
import ContactFAQ from "./components/ContactFAQ/ContactFAQ";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      offset: 140,
      once: false,
    });
  }, []);

  return (
    <>
      <ContactUsBanner />
      <ContactHelpDesk />
      <ContactFAQ />
      <ContactQueryDesk />
    </>
  );
}
