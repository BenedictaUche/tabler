import { Bell, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Interface", path: "/interface" },
    { name: "Components", path: "/components" },
    { name: "Pages", path: "/pages" },
    { name: "Forms", path: "/forms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Documentation", path: "/documentation" },
  ];

  return (
    <header className="bg-white shadow-md px-14">
      {/* Main header */}
      {/* <div className="p-4 flex items-center justify-between border-b"> */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center space-x-4">
          <img src="/images/logo.png" alt="tabler logo" className="h-6" />
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/BenedictaUche/tabler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-blue-500 border-2 border-blue-500 p-2 rounded-md">
                Source code
              </button>
            </a>
            <Bell size={24} className="text-gray-600" />
            <div className="flex items-center space-x-2">
              <img
                src="https://github.com/shadcn.png"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm text-gray-600">
                <p className="text-lg font-normal">Jane Pearson</p>
                <p className="text-xs font-normal">Administrator</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Navigation tabs */}
      <div className="sm:flex border-b hidden ">
        <nav className="flex space-x-4 p-2 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-gray-600 hover:text-blue-600 ${
                location.pathname === link.path
                  ? "border-b-2 border-blue-600 font-medium"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu for smaller screens */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-2 text-gray-600 hover:text-blue-600 ${
                location.pathname === link.path
                  ? "border-b-2 border-blue-600 font-medium"
                  : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
