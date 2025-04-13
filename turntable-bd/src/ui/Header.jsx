import { useState } from "react";
import {
  FaRecordVinyl,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHome,
  FaTools,
  FaPhone,
  FaBoxOpen,
} from "react-icons/fa";
import { Button } from "./Button";
import { Input } from "./Input";
import { useLocation } from "wouter";
import { NavLink } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const isActive = (path) => location === path;

  return (
    <header className="bg-white shadow-sm z-20 fixed left-0 right-0 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <NavLink to="/" className="flex items-center space-x-2">
            <FaRecordVinyl className="text-amber-500 text-2xl" />
            <h1 className="text-2xl font-bold text-gray-900">BD Turntable</h1>
          </NavLink>
        </div>

        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={`font-medium transition-colors ${
              isActive("/") ? "text-amber-500" : "hover:text-amber-500"
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={`font-medium transition-colors ${
              isActive("/products") ? "text-amber-500" : "hover:text-amber-500"
            }`}
          >
            Products
          </NavLink>
          <NavLink
            href="/services"
            className={`font-medium transition-colors ${
              isActive("/services") ? "text-amber-500" : "hover:text-amber-500"
            }`}
          >
            Services
          </NavLink>
          <NavLink
            href="/contact"
            className={`font-medium transition-colors ${
              isActive("/contact") ? "text-amber-500" : "hover:text-amber-500"
            }`}
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="hover:text-amber-500 transition-colors"
            aria-label="Search"
          >
            <FaSearch />
          </button>
          <NavLink
            href="/account"
            className="hover:text-amber-500 transition-colors"
          >
            <FaUser />
          </NavLink>
          <NavLink
            to="/cart"
            className="hover:text-amber-500 transition-colors relative"
          >
            <CartOverview />
          </NavLink>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="md:hidden"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </div>
      </div>

      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 z-20 animate-in slide-in-from-top-5 duration-300 ">
          <form
            onSubmit={handleSearch}
            className="container mx-auto flex items-center"
          >
            <Input
              type="text"
              placeholder="Search for products..."
              className="flex-grow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <Button
              type="submit"
              className="ml-2 bg-amber-500 hover:bg-amber-600 text-white cursor-pointer"
            >
              <FaSearch className="mr-2" />
              Search
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={toggleSearch}
              className="ml-2 cursor-pointer"
            >
              Cancel
            </Button>
          </form>
        </div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <FaTimes />
          </Button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  isActive("/")
                    ? "bg-amber-100 text-amber-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <FaHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  isActive("/products")
                    ? "bg-amber-100 text-amber-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <FaBoxOpen />
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/services"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  isActive("/services")
                    ? "bg-amber-100 text-amber-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <FaTools />
                <span>Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/contact"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  isActive("/contact")
                    ? "bg-amber-100 text-amber-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <FaPhone />
                <span>Contact</span>
              </NavLink>
            </li>
            <li className="border-t border-gray-200 pt-4 mt-4">
              {/*  <Link
                href="/account"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                onClick={() => setSidebarOpen(false)}
              >
                <FaUser />
                <span>My Account</span>
              </Link> */}
            </li>
            <li>
              <NavLink
                to="/cart"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                onClick={() => setSidebarOpen(false)}
              >
                <FaShoppingCart />
                <span>Shopping Cart</span>
                <CartOverview />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;
