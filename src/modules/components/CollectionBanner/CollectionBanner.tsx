import heroBanner from "../../../assets/images/collection-bannar.png";

export default function Banner() {
  return (
    <div
    className="h-[70vh] bg-cover bg-center"
    style={{ backgroundImage: `url(${heroBanner})` }}
  >
    <div className="h-full flex flex-col justify-center md:items-center gap-8 p-4 text-white bg-black bg-opacity-10">
      <h1 className="text-3xl md:text-5xl font-medium">
        Furnish Your Home <br /> with Our Collection
      </h1>
      <p>Discover the Perfect Piece for Every Room in Your Home.</p>
    </div>
  </div>
  )
}
