import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Button from "../../../components/Button/Button";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts} from "../../../redux/productsSlice";
import { addToCart } from "../../../redux/cartSlice";
import { Range } from "react-range";
import { FiX } from "react-icons/fi";
import { Product } from "../../../utils/types";

export default function CollectionProducts() {
  const [gridColumn, setGridColumn] = useState(4);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [sortOption, setSortOption] = useState<string | undefined>("");
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const products = useSelector(
    (state: RootState) => state.productsData.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const handleSort = (products: Product[]) => {
    const sortedProducts = [...products];
    switch (sortOption) {
      case "low-to-high":
        return sortedProducts.sort((a, b) => a.sellingPrice - b.sellingPrice);
      case "high-to-low":
        return sortedProducts.sort((a, b) => b.sellingPrice - a.sellingPrice);
      case "a-z":
        return sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
        );
      case "z-a":
        return sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name, undefined, { sensitivity: "base" })
        );
      default:
        return sortedProducts;
    }
  };

  const handleFilterByPrice = (products: Product[]) => {
    return products.filter(
      (product) =>
        product.sellingPrice >= priceRange[0] &&
        product.sellingPrice <= priceRange[1]
    );
  };

  const sortedProducts = handleSort(products);
  const filteredProducts = handleFilterByPrice(sortedProducts);
  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    document.body.style.overflow = drawerOpen ? "auto" : "hidden";
  };

  return (
    <div className="container mx-auto px-4 md:px-24 mb-24">
      {/* Drawer overlay and container */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleDrawer}></div>
      )}
      <div
        className={`fixed top-0 left-0 z-50 w-80 bg-white h-full shadow-lg transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Filter</h3>
          <button onClick={toggleDrawer} className="text-2xl">
            <FiX />
          </button>
        </div>

        {/* Price Range Selector */}
        <div className="p-4">
          <h4 className="mb-4">Price Range</h4>
          <Range
            step={10}
            min={50}
            max={500}
            values={priceRange}
            onChange={(values) => setPriceRange(values)}
            renderTrack={({ props, children }) => (
              <div {...props} className="w-full h-2 bg-gray-300 rounded">
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-4 h-4 bg-blue-500 rounded-full focus:outline-none"
              />
            )}
          />
          <div className="mt-4 flex justify-between">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([+e.target.value, priceRange[1]])
              }
              className="w-20 p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], +e.target.value])
              }
              className="w-20 p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      {/* filters */}
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-between my-12">
        {/* Filter Section */}
        <div
          className="text-xl flex items-center gap-1 text-black cursor-pointer"
          onClick={toggleDrawer}
        >
          <HiOutlineAdjustmentsVertical />
          <p className="text-sm md:text-base">Filter</p>
        </div>

        {/* Grid Selection Section */}
        <div className="hidden lg:flex gap-4 justify-center items-center">
          <div
            className="flex flex-col items-center group"
            onClick={() => setGridColumn(2)}
          >
            <div className="grid grid-cols-2 gap-1 p-2 cursor-pointer">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-[6px] ${
                    gridColumn === 2 ? "bg-gray-500" : "bg-gray-400"
                  } group-hover:bg-gray-500 transition duration-200`}
                />
              ))}
            </div>
          </div>

          <div
            className="flex flex-col items-center group"
            onClick={() => setGridColumn(4)}
          >
            <div className="grid grid-cols-4 gap-1 p-2 cursor-pointer">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-[6px] ${
                    gridColumn === 4 ? "bg-gray-500" : "bg-gray-400"
                  } group-hover:bg-gray-500 transition duration-200`}
                />
              ))}
            </div>
          </div>

          <div
            className="flex flex-col items-center group"
            onClick={() => setGridColumn(6)}
          >
            <div className="grid grid-cols-6 gap-1 p-2 cursor-pointer">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-[6px] ${
                    gridColumn === 6 ? "bg-gray-500" : "bg-gray-400"
                  } group-hover:bg-gray-500 transition duration-200`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sort By Section */}
        <div className="flex justify-end items-center gap-2">
          <select
            className="select select-bordered select-sm"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low-to-high">Price, Low to High</option>
            <option value="high-to-low">Price, High to Low</option>
            <option value="a-z">Alphabetically, A - Z</option>
            <option value="z-a">Alphabetically, Z - A</option>
          </select>
        </div>
      </div>

      {/* products */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 col-${gridColumn} gap-6`}
      >
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            costPrice={product.costPrice}
            sellingPrice={product.sellingPrice}
            onClick={() => dispatch(addToCart(product))}
          />
        ))}
      </div>

      {/* Show more products button */}
      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center mt-16">
          <Button
            className="text-sm lg:text-base py-2 lg:py-3 px-5 lg:px-7"
            onClick={showMoreProducts}
          >
            Show More Products
          </Button>
        </div>
      )}
    </div>
  );
}
