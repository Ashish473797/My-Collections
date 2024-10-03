import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { siteData, footerLinks } from "../utils/constants";

export default function Footer() {
  return (
    <>
      <div className="py-16 border-t border-t-gray-300">
        <div className="flex flex-col lg:flex-row container mx-auto px-4 lg:px-24 gap-4">
          <div className="lg:basis-[40%] flex flex-col gap-6 max-lg:mb-8">
            <h2 className="text-2xl font-bold">{siteData.siteName}</h2>
            <div className="text-sm">
              <a href={`mailto:${siteData.email}`} className="block mb-2">
                Email:{siteData.email}
              </a>
              <a
                href={`tel:${parseInt(siteData.phoneNo.split("-").join(""))}`}
                className="block mb-2"
              >
                Phone:{siteData.phoneNo}
              </a>
            </div>
            <div>
              <p className="mb-2">Sign up for sale, new arrivals & more</p>
              <div className="bg-white border border-gray-500 p-1 flex w-[98%] xl:w-[75%]">
                <input
                  className="text-sm px-2 py-2 rounded-full w-full text-black focus:outline-none font-medium max-sm:w-full"
                  type="text"
                  placeholder="Email Address"
                />
                <Button className="text-sm text-nowrap px-4 lg:px-6">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:basis-[60%] flex flex-wrap lg:flex-row gap-4 justify-between">
            {footerLinks.map((link) => (
              <div key={link.id} className="max-md:mb-8">
                <h3 className="mb-5 font-semibold">{link.heading}</h3>
                <div className="flex flex-col gap-3 text-sm">
                  {link.links.map((link, index) => (
                    <Link key={index} to="/">{link}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm bg-gray-900 text-white border-t border-t-slate-300 font-medium">
        {`Made by @ ${siteData.author}.`}
      </div>
    </>
  );
}
