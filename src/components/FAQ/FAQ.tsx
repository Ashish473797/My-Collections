import { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="accordion__title text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-14 text-gray-800">
        Popular Searched Questions
      </h1>
      <div className="accordion__wrapper bg-white rounded-3xl pt-6 lg:pt-8 w-full">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`accordion pr-4 lg:pr-10 pl-4 lg:pl-10 pb-6 lg:pb-8 mb-6 w-full ${
              index !== faqs.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <div
              className="accordion__header flex justify-between items-center cursor-pointer w-full"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h2 className="accordion__question text-lg lg:text-xl font-medium w-full text-gray-500">
                {faq.question}
              </h2>
              <span
                className={`accordion__icon transition-transform duration-300 transform ${
                  openFAQ === faq.id ? "rotate-180" : ""
                }`}
              >
                <div className="w-9 h-9 bg-[#E0E0FF] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </span>
            </div>
            <div
              className={`accordion__content overflow-hidden transition-all duration-500 ease-in-out ${
                openFAQ === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{
                height: openFAQ === faq.id ? "auto" : "0px",
              }}
            >
              <p className="accordion__answer py-4 text-sm lg:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
