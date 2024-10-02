import feature1 from "../../../assets/images/feature1.png"
import feature2 from "../../../assets/images/feature2.png"
import feature3 from "../../../assets/images/feature3.png"

export default function Feature() {
  return (
    <div className="bg-[#F4F6E8] py-12 lg:py-20">
        <div className="container mx-auto lg:grid grid-cols-3 px-12 lg:px-24 gap-24 justify-between">
          <div className="flex flex-col justify-center items-center gap-4 max-lg:mb-12">
            <img
              src={feature1}
              className="w-16"
              alt="icon"
            />
            <h2 className="text-center text-xl md:text-2xl font-semibold">
              Durable Furniture
            </h2>
            <p className="text-center text-sm">
              Invest in long-lasting furniture built with sturdy materials
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 max-lg:mb-12">
            <img
              src={feature2}
              className="w-16"
              alt="icon"
            />
            <h2 className="text-center text-xl md:text-2xl font-semibold">
              Stylish Designs
            </h2>
            <p className="text-center text-sm">
              Make a statement with our elegant and on-trend furniture options
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 max-lg:mb-12">
            <img
              src={feature3}
              className="w-16"
              alt="icon"
            />
            <h2 className="text-center text-xl md:text-2xl font-semibold">
              Eco-Friendly Choices
            </h2>
            <p className="text-center text-sm">
              Support a healthier planet by choosing furniture made with
              sustainable
            </p>
          </div>
        </div>
      </div>
  )
}
