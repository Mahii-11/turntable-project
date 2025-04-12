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
import { Link, useLocation } from "wouter";

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
          <Link href="/" className="flex items-center space-x-2">
            <FaRecordVinyl className="text-amber-500 text-2xl" />
            <h1 className="text-2xl font-bold text-gray-900">BD Turntable</h1>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`font-medium transition-colors ${
              isActive("/") ? "text-amber-500" : "hover:text-amber-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`font-medium transition-colors ${
              isActive("/products") ? "text-amber-500" : "hover:text-amber-500"
            }`}
          >
            Products
          </Link>
          <Link
            href="/services"
            className={`font-medium transition-colors ${
              isActive("/services") ? "text-amber-500" : "hover:text-amber-500"
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`font-medium transition-colors ${
              isActive("/contact") ? "text-amber-500" : "hover:text-amber-500"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="hover:text-amber-500 transition-colors"
            aria-label="Search"
          >
            <FaSearch />
          </button>
          <Link
            href="/account"
            className="hover:text-amber-500 transition-colors"
          >
            <FaUser />
          </Link>
          <Link
            href="/cart"
            className="hover:text-amber-500 transition-colors relative"
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Link>
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
              <Link
                href="/"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  isActive("/")
                    ? "bg-amber-100 text-amber-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  isActive("/products")
                    ? "bg-amber-100 text-amber-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <FaBoxOpen />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link
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
              </Link>
            </li>
            <li>
              <Link
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
              </Link>
            </li>
            <li className="border-t border-gray-200 pt-4 mt-4">
              <Link
                href="/account"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                onClick={() => setSidebarOpen(false)}
              >
                <FaUser />
                <span>My Account</span>
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                onClick={() => setSidebarOpen(false)}
              >
                <FaShoppingCart />
                <span>Shopping Cart (3)</span>
              </Link>
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
