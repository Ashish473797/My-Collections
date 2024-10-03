import FAQAccordion from "../../../components/FAQ/FAQ";
import { faqs } from "../../../utils/constants";

export default function ContactFAQ() {
  return (
    <div className="bg-[#E0E0FF] py-10 lg:py-16 mt-4 lg:mt-8">
      <FAQAccordion faqs={faqs} />
    </div>
  );
}
