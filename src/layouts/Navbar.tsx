import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteData, navLinks } from "../utils/constants";
import Button from "../components/Button/Button";
import { RootState } from "../redux/store";
import { selectCartTotal } from "../redux/selectors";
import { useSelector } from "react-redux";

export default function Navbar() {

  const cartItems = useSelector((state: RootState) => state.cartData.items);
  const total = useSelector((state: RootState) => selectCartTotal(state));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1 space-x-4">
        <Link to="/" className="btn btn-ghost text-xl">
          {siteData.siteName}
        </Link>
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path} className="hidden md:block">
            {link.title}
          </NavLink>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{cartItems.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cartItems.length} Items</span>
              <span className="text-info">Subtotal: ${total}</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="btn btn-square btn-ghost md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 flex flex-col justify-center items-center h-[100vh] bg-white z-10">
          <button
            className="absolute top-4 right-4 btn btn-square btn-ghost"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-4 items-center">
            <Link to="/collections" onClick={toggleMenu}>
              <Button className="hover:scale-105 transition-all py-3 px-8 border border-gray-500">
                Collection Page
              </Button>
            </Link>
            <Link to="/contact-us" onClick={toggleMenu}>
              <Button className="hover:scale-105 transition-all py-3 px-8 border border-gray-500">
                ContactUs Page
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
