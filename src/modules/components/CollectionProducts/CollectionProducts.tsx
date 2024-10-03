import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Button from "../../../components/Button/Button";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";

export default function CollectionProducts() {

    const [gridColunm, setGridColunm] = useState(4);

  const dispatch: AppDispatch = useDispatch();

  const products = useSelector(
    (state: RootState) => state.productsData.products
  );

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div className="container mx-auto px-4 md:px-24 mb-24">
    {/* filters  */}
    <div className="grid grid-cols-2 lg:grid-cols-3 justify-between my-12">
      {/* Filter Section */}
      <div className="text-xl flex items-center gap-1 text-black cursor-pointer">
        <HiOutlineAdjustmentsVertical />
        <p className="text-sm md:text-base">Filter</p>
      </div>

      {/* Grid Selection Section */}
      <div className="hidden lg:flex gap-4 justify-center items-center">
        <div className="flex gap-3">
          {/* 2-column grid option */}
          <div
            className="flex flex-col items-center group"
            onClick={() => {
              setGridColunm(2);
            }}
          >
            <div className="grid grid-cols-2 gap-1 p-2 cursor-pointer">
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
            </div>
          </div>

          {/* 4-column grid option */}
          <div
            className="flex flex-col items-center group"
            onClick={() => {
              setGridColunm(4);
            }}
          >
            <div className="grid grid-cols-4 gap-1 p-2 cursor-pointer">
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
            </div>
          </div>

          {/* 6-column grid option */}
          <div
            className="flex flex-col items-center group"
            onClick={() => {
              setGridColunm(6);
            }}
          >
            <div className="grid grid-cols-6 gap-1 p-2 cursor-pointer">
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
              <div className="w-2 h-[6px] bg-gray-400 group-hover:bg-gray-500 transition duration-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sort By Section */}
      <div className="flex justify-end items-center gap-2">
        {/* <p className="text-base">Sort By</p> */}
        <select
          className="select select-bordered select-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Sort By
          </option>
          <option value="low-to-high">Price, Low to High</option>
          <option value="high-to-low">Price, High to Low</option>
          <option value="a-z">Alphabetically, A - Z</option>
          <option value="z-a">Alphabetically, Z - A</option>
        </select>
      </div>
    </div>

    {/* products  */}
    <div
      className={`grid grid-cols-1 md:grid-cols-2 col-${gridColunm} gap-6`}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          costPrice={product.costPrice}
          sellingPrice={product.sellingPrice}
        />
      ))}
    </div>

    <div className="flex justify-center mt-16">
      <Button className="text-sm lg:text-base py-2 lg:py-3 px-5 lg:px-7">Show More Products</Button>
    </div>
  </div>
  )
}
