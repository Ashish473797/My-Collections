import { Link } from "react-router-dom";

export default function HelpDeskCard({
  icon,
  title,
  description,
  linkText,
}: {
  icon: string;
  title: string;
  description: string;
  linkText: string;
}) {
  return (
    <div className="bg-[#F4F4FF] py-4 md:py-6 lg:py-10 px-3 md:px-8 lg:px-12 rounded-lg flex flex-col gap-4">
      <img src={icon} className="w-[64px]" alt="icon" />
      <div>
        <h2 className="text-xl lg:text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm lg:text-base text-gray-500">{description}</p>
      </div>
      <Link to="/" className="text-sm lg:text-base">{linkText}</Link>
    </div>
  );
}
