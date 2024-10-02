import { Link } from "react-router-dom";

export default function QueryCard({icon, title, linkText, rightBorder=true}: {icon: string, title: string, linkText: string, rightBorder?: boolean}) {
  return (
    <div className="max-md:border-b lg:border-r border-gray-300 flex flex-col gap-3 items-center justify-center"
    style={rightBorder ? {} : {border: "none"}}>
      <img
        src={icon}
        className="w-[48px] lg:w-[60px]"
        alt="icon"
      />
      <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
      <Link to="/" className="lg:text-xl underline font-medium max-lg:mb-8">
        {linkText}
      </Link>
    </div>
  );
}
