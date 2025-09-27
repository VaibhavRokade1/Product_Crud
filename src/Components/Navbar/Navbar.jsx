import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <TiShoppingCart className="text-5xl font-bold" />
        <h1 className="font-bold text-4xl">e-Store</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <NavLink to="/" className="hover:text-gray-100 transition duration-300">
          Dashboard
        </NavLink>
        <NavLink
          to="/add"
          className="hover:text-gray-100 transition duration-300"
        >
          Add Product
        </NavLink>
        <NavLink
          to="/list"
          className="hover:text-gray-100 transition duration-300"
        >
          Product List
        </NavLink>
      </ul>

      {/* Auth Button - Desktop */}
      <button className="hidden md:block bg-white text-orange-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
        Sign In
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-orange-600 text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50 shadow-lg">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-100 text-xl font-medium"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/add"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-100 text-xl font-medium"
          >
            Add Product
          </NavLink>
          <NavLink
            to="/list"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-100 text-xl font-medium"
          >
            Product List
          </NavLink>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-white text-orange-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
