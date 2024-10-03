import contactBanner from "../../../assets/images/contact-banner.webp"
import Button from "../../../components/Button/Button";
import TrackExchangeCard from "../../../components/TrackExchangeCard/TrackExchangeCard";
import { trackExchangeData } from "../../../utils/constants";

export default function ContactUsBanner() {
  return (
    <div
      className="h-[64vh] mb-40 max-lg:mb-[360px]"
      style={{
        backgroundImage: `url(${contactBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full backdrop-blur-md flex flex-col gap-2 items-center text-white">
        <h1 className="text-3xl lg:text-5xl font-semibold mt-24">
          HELP CENTER
        </h1>
        <p className="text-sm md:text-base lg:font-medium">
          Let us know how we may help you?
        </p>
        <div className="bg-white p-1 w-[90%] lg:w-[40%] rounded-full flex mt-16">
          <input
            className="text-base px-4 py-2 lg:py-4 rounded-full grow text-black focus:outline-none font-medium max-sm:w-full"
            type="text"
            placeholder="Search for answer..."
          />
          <Button className="text-sm lg:text-base rounded-full px-6 lg:px-12">
            Search
          </Button>
        </div>
      </div>
      <div className="absolute w-full lg:flex gap-6 justify-center translate-y-[-25%] lg:translate-y-[-50%] p-4">
        {trackExchangeData.map((data) => (
          <TrackExchangeCard
            key={data.id}
            icon={data.icon}
            title={data.title}
            description={data.description}
            buttonText={data.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
