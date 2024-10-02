import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[85vh]">
      <div className="flex flex-col gap-4 items-center">
        <Link to="/collections"><Button className="hover:scale-105 transition-all py-3 px-8 border border-gray-500">Collection Page</Button></Link>
        <Link to="/contact-us"><Button className="hover:scale-105 transition-all py-3 px-8 border border-gray-500">ContactUs Page</Button></Link>
      </div>
    </div>
  )
}
