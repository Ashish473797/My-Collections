import HelpDeskCard from "../../../components/HelpDeskCard/HelpDeskCard";
import { helpDeskData } from "../../../utils/constants";

export default function HelpDeskSection() {
  return (
    <div className="py-8 lg:py-12">
    <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-8 lg:mb-12">
      Browse our help desk
    </h2>
    <div className="container p-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
      {helpDeskData.map((data) => (
        <HelpDeskCard
          key={data.id}
          icon={data.icon}
          title={data.title}
          description={data.description}
          linkText={data.linkText}
        />
      ))}
    </div>
  </div>
  )
}
