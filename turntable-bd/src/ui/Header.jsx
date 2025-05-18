import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import LanguageToggle from "../components/LanguageToggle";
import { Settings as GearIcon } from "lucide-react";
import {
  FaRecordVinyl,
  FaSearch,
  FaUserTie,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaSignInAlt,
  FaTools,
  FaPhone,
} from "react-icons/fa";
import { Button } from "./Button";
import { Input } from "./Input";
import { useLocation } from "wouter";
import { NavLink } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import LanguageToggle from "../components/LanguageToggle";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [location] = useLocation();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const isActive = (path) => location === path;

  return (
    <header className="bg-gradient-to-b from-[#1b0b0b] to-transparent shadow-sm z-50 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <NavLink to="/" className="flex items-center space-x-2">
            <FaRecordVinyl className="text-amber-500 text-2xl" />
            <h1
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl lg:text-2xl font-bold text-yellow-400 "
            >
              BD Turntable
            </h1>
          </NavLink>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-xs lg:text-lg">
          {/* Desktop Menu */}
          {[
            { to: "/🎵Turntables", label: "🎵 Turntables" },
            { to: "/PartsHub", label: "Parts Hub" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
            { to: "/meet-our-founder", label: "Founder", icon: <FaUserTie /> },
            { to: "/login", label: "Login" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={`font-medium transition-colors ${
                isActive(to) ? "text-amber-500" : "hover:text-amber-500"
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSearch}
            className="hover:text-amber-500 transition-colors hidden md:flex"
            aria-label="Search"
          >
            <FaSearch />
          </button>
          <NavLink
            to="/cart"
            className="hover:text-amber-500 transition-colors relative"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <CartOverview />
          </NavLink>
          <div className="md:flex">
            <LanguageToggle />
          </div>
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

      {/* Search Box */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 z-40 animate-in slide-in-from-top-5 duration-300">
          <form
            onSubmit={handleSubmit}
            className="max-w-7xl mx-auto flex items-center gap-2"
          >
            <Input
              type="text"
              placeholder="Check order status..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow"
              autoFocus
            />
            <Button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              <FaSearch className="mr-2" />
              Search
            </Button>
            <Button type="button" variant="ghost" onClick={toggleSearch}>
              Cancel
            </Button>
          </form>
        </div>
      )}

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 transform ${
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

        <nav className="p-4 space-y-4">
          {/* Search input in sidebar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!query.trim()) return;
              navigate(`/order/${query}`);
              setQuery("");
              setSidebarOpen(false);
            }}
            className="flex items-center gap-2 p-2 rounded-md bg-gray-100"
          >
            <Input
              type="text"
              placeholder="Check order status..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow"
            />
            <Button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              <FaSearch />
            </Button>
          </form>

          {[
            { to: "/PartsHub", label: "Parts Hub", icon: <GearIcon /> },
            { to: "/🎵Turntables", label: "🎵 Turntables" },
            { to: "/services", label: "Services", icon: <FaTools /> },
            { to: "/contact", label: "Contact", icon: <FaPhone /> },
            { to: "/login", label: "Login", icon: <FaSignInAlt /> },
            { to: "/meet-our-founder", label: "Founder", icon: <FaUserTie /> },
          ].map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={`flex items-center space-x-2 p-2 rounded-md ${
                isActive(to)
                  ? "bg-amber-100 text-amber-700"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
              onClick={() => {
                setSidebarOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}

          <div className="border-t border-gray-200 pt-4 mt-4">
            <NavLink
              to="/cart"
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <FaShoppingCart />
              <span>Shopping Cart</span>
              <CartOverview />
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;
