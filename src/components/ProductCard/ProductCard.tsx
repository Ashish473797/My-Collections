import { discountInPercent } from "../../helpers/helper";
import { GrCart } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import { TbArrowsCross } from "react-icons/tb";

type ProductCardProp = {
  name: string;
  image: string;
  costPrice: number;
  sellingPrice: number;
  onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined;
};

export default function ProductCard({
  name,
  image,
  costPrice,
  sellingPrice,
  onClick,
}: ProductCardProp) {

  const discountPercent = discountInPercent(costPrice, sellingPrice);

  return (
    <div className="relative">
      {
        discountPercent !== 0 && <p className="text-sm bg-[#D47070] text-white px-2 rounded absolute top-2 left-2"> - {discountPercent}%</p>
      }
      <img src={image} alt={name} className="w-full object-cover mb-4 cursor-pointer" />
      <h2 className="font-semibold mb-3 cursor-pointer hover:text-red-500">{name}</h2>
      {
        costPrice === sellingPrice ? <p className="font-medium">${sellingPrice}</p>:<p className="text-red-500 font-medium">${sellingPrice}<span className="ml-1 text-[0.85rem] line-through text-slate-700">${costPrice}</span></p>
      }
      <hr className="my-3" />
      <div className="flex justify-between items-center font-semibold text-black mb-3">
        <div className="flex gap-2 cursor-pointer hover:text-gray-500">
          <GrCart />
          <p className="text-base" onClick={onClick}>Add to cart</p>
        </div>
        <div className="flex gap-1 text-base">
          <MdFavoriteBorder className="cursor-pointer  hover:text-gray-500" />
          <TbArrowsCross className="cursor-pointer  hover:text-gray-500" />
        </div>
      </div>
    </div>
  );
}
