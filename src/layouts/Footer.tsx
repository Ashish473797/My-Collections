import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

export default function Footer() {
  return (
    <>
    <div className="py-16 border-t border-t-gray-300">
      <div className="flex flex-col lg:flex-row container mx-auto px-4 lg:px-24 gap-4">
        <div className="lg:basis-[40%] flex flex-col gap-6 max-lg:mb-8">
          <h2 className="text-2xl font-bold">My Collections</h2>
          <div className="text-sm">
            <p>Email:abc@ecomposershop.com</p>
            <p>Phone: (123) 555-1234</p>
          </div>
          <div>
            <p className="mb-2">Sign up for sale, new arrivals & more</p>
            <div className="bg-white border border-gray-500 p-1 flex w-[98%] xl:w-[75%]">
              <input className="text-sm px-2 py-2 rounded-full grow text-black focus:outline-none font-medium max-sm:w-full" type="text" placeholder="Email Address" />
              <Button className="px-6 text-sm">Sign Up</Button>
            </div>
          </div>
        </div>
        <div className="lg:basis-[60%] flex flex-wrap lg:flex-row gap-4 justify-between">
          <div className="max-md:mb-8">
            <h3 className="mb-5 font-semibold">About Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/">About us</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Affiliate</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Terms of use</Link>
            </div>
          </div>
          <div className="max-md:mb-8">
            <h3 className="mb-5 font-semibold">Resource</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/">Return policy</Link>
              <Link to="/">My Account</Link>
              <Link to="/">Find a Store</Link>
              <Link to="/">Legal & Privacy</Link>
              <Link to="/">Contact</Link>
            </div>
          </div>
          <div className="max-md:mb-8">
            <h3 className="mb-5 font-semibold">Information</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/">Our Story</Link>
              <Link to="/">Visit Our Store</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Account</Link>
            </div>
          </div>
          <div className="max-md:mb-8">
            <h3 className="mb-5 font-semibold">Help</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/">FAQ</Link>
              <Link to="/">Terms of Use</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Cookie Policy</Link>
              <Link to="/">Sitemap</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="text-center py-4 text-sm bg-gray-900 text-white border-t border-t-slate-300 font-medium">Made by @ Ashish Kumar Gupta.</div>
    </>
  )
}
