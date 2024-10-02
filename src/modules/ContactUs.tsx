import contactBanner from "../assets/images/contact-banner.webp";
import Button from "../components/Button/Button";
import FAQAccordion from "../components/FAQ/FAQ";
import HelpDeskCard from "../components/HelpDeskCard/HelpDeskCard";
import TrackExchangeCard from "../components/TrackExchangeCard/TrackExchangeCard";
import QueryCard from "../components/QueryCard/QueryCard";

const faqs = [
  { id: 1, question: "What is the purpose of this pen?", answer: "This pen is designed to provide web developers with boilerplate code for a FAQ Accordion." },
  { id: 2, question: "What is an accordion?", answer: "An accordion is a vertically stacked list of headers that users can click on to reveal more information about a business." },
  { id: 3, question: "How can I customize the accordion?", answer: "You can customize the accordion by modifying the CSS styles and changing the HTML structure." },
  { id: 4, question: "Is this accordion responsive?", answer: "Yes, this accordion is designed to be responsive and will adjust its layout based on the screen size." },
  { id: 5, question: "Can I use this accordion in my project?", answer: "Absolutely! Feel free to use this accordion in your projects." },
];

export default function ContactUs() {
  return (
    <>

      {/* banner  */}
      <div
        className="h-[60vh] mb-40 max-lg:mb-[360px]"
        style={{ backgroundImage: `url(${contactBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="h-full backdrop-blur-md flex flex-col gap-2 items-center text-white">
            <h1 className="text-3xl lg:text-5xl font-semibold mt-28">HELP CENTER</h1>
            <p className="text-sm md:text-base lg:font-medium">Let us know how we may help you?</p>
            <div className="bg-white p-1 w-[90%] lg:w-[40%] rounded-full flex mt-16">
              <input className="text-base px-4 py-2 lg:py-4 rounded-full grow text-black focus:outline-none font-medium max-sm:w-full" type="text" placeholder="Search for answer..." />
              <Button className="text-sm lg:text-base rounded-full px-6 lg:px-12">Search</Button>
            </div>
        </div>
        <div className="absolute w-full lg:flex gap-6 justify-center translate-y-[-25%] lg:translate-y-[-50%] p-4">
            <TrackExchangeCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Te8cHLsQU8icon-hc-1.png?v=1724405573" title="Order Tracking" description="Log in to check the status of your order" buttonText="Track your order"/>
            <TrackExchangeCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Cbwk5YMW5Dicon-hc-2.png?v=1724405681" title="Return & Exchange" description="We make it easy to return and exchange styles." buttonText="Start a return"/>
        </div>
      </div>

      {/* help desk cards  */}
      <div className="py-8 lg:py-12">
        <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-8 lg:mb-12">Browse our help desk</h2>
        <div className="container p-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <HelpDeskCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135" title="Size Guide" description="Ensure your customers get the right fit" linkText="View More"/>
          <HelpDeskCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135" title="Size Guide" description="Ensure your customers get the right fit" linkText="View More"/>
          <HelpDeskCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135" title="Size Guide" description="Ensure your customers get the right fit" linkText="View More"/>
          <HelpDeskCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135" title="Size Guide" description="Ensure your customers get the right fit" linkText="View More"/>
          <HelpDeskCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135" title="Size Guide" description="Ensure your customers get the right fit" linkText="View More"/>
          <HelpDeskCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135" title="Size Guide" description="Ensure your customers get the right fit" linkText="View More"/>
        </div>
      </div>


      {/* Faq  */}
      <div className="bg-[#E0E0FF] py-10 lg:py-16 mt-4 lg:mt-8">
        <FAQAccordion faqs={faqs}/>
      </div>

      {/* query  */}
      <div className="container mx-auto my-24 px-4">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-4">Any other questions?</h2>
          <p className="text-sm lg:text-base text-center font-medium text-gray-700 mb-16">We’re here to help. You can contact us: Weekdays: 6am to 6pm PT, Weekends: 6am to 6pm PT.</p>
          <div className="border border-gray-300 lg:mx-32 rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            <QueryCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892" title="Call" linkText="Contact Us" />
            <QueryCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892" title="Call" linkText="Contact Us" />
            <QueryCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892" title="Call" linkText="Contact Us" />
            <QueryCard icon="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892" title="Call" linkText="Contact Us" rightBorder={false}/>
          </div>
      </div>

      </>
  );
}
