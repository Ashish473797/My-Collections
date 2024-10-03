import QueryCard from "../../../components/QueryCard/QueryCard";
import { queryCardData } from "../../../utils/constants";

export default function QuerySection() {
  return (
    <div className="container mx-auto my-16 lg:my-24 px-4">
    <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-4">
      Any other questions?
    </h2>
    <p className="text-sm lg:text-base text-center font-medium text-gray-700 mb-10 lg:mb-16">
      We’re here to help. You can contact us: Weekdays: 6am to 6pm PT,
      Weekends: 6am to 6pm PT.
    </p>
    <div className="border border-gray-300 lg:mx-32 rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
      {queryCardData.map((data, index) => (
        <QueryCard
          key={data.id}
          icon={data.icon}
          title={data.title}
          linkText={data.linkText}
          rightBorder={index + 1 === queryCardData.length ? false : true}
        />
      ))}
    </div>
  </div>
  )
}
