import { collectionFeatures } from "../../../utils/constants";

export default function Feature() {
  return (
    <div className="bg-[#F4F6E8] py-12 lg:py-20">
      <div className="container mx-auto lg:grid grid-cols-3 px-12 lg:px-24 gap-24 justify-between">
        {collectionFeatures.map((feature) => (
          <div key={feature.id} className="flex flex-col justify-center items-center gap-4 max-lg:mb-12">
            <img src={feature.icon} className="w-14" alt="icon" />
            <h2 className="text-center text-xl md:text-2xl font-semibold">
              {feature.title}
            </h2>
            <p className="text-center text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
