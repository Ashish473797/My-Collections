import Button from "../Button/Button";
import { MdArrowRightAlt } from "react-icons/md";

export default function TrackExchangeCard({icon, title, description, buttonText}: {icon: string, title: string, description: string, buttonText: string}) {
  return (
    <div className="flex flex-col items-center gap-3 py-4 lg:py-6 px-4 lg:px-16 lg:min-w-[480px] bg-white rounded-lg border mb-4">
        <img src={icon} className="w-[48px] cursor-pointer" alt="icon" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-700">{description}</p>
        <Button className="py-2 px-6 rounded-full text-sm flex items-center gap-2">{buttonText}<MdArrowRightAlt className="text-xl"/></Button>
    </div>
  )
}
