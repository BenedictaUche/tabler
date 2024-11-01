import { Bell, Menu, House, Box, Component, StickyNote, SquareCheckBig, Images, FileText  } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <House size={18} /> },
    { name: "Interface", path: "/interface", icon: <Box size={18}/> },
    { name: "Components", path: "/components", icon:  <Component size={18}/> },
    { name: "Pages", path: "/pages", icon: <StickyNote size={18}/> },
    { name: "Forms", path: "/forms", icon: <SquareCheckBig size={18}/> },
    { name: "Gallery", path: "/gallery", icon: <Images size={18}/> },
    { name: "Documentation", path: "/documentation",  icon: <FileText size={18}/> },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Main header */}
      <div className="flex items-center justify-between py-4 sm:px-16 px-4 border-b">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="tabler logo" className="h-10" />

        </div>

        <div className="flex items-center gap-4">
        <a
            href="https://github.com/BenedictaUche/tabler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-blue-500 border-2 border-blue-500 p-2 rounded-md hidden md:block">
              Source code
            </button>
          </a>
          <Bell size={24} className="text-gray-600 hidden md:block" />
          <div className="flex items-center space-x-2">
            <img
              src="https://github.com/shadcn.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm text-gray-600 hidden md:block">
              <p className="text-lg font-normal">Jane Pearson</p>
              <p className="text-xs font-normal">Administrator</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="hidden md:flex border-b px-16">
        <nav className="flex space-x-4 p-2 overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-gray-600 hover:text-blue-600 flex gap-2 items-center ${
                location.pathname === link.path
                  ? "border-b-2 border-blue-600 font-medium text-blue-600"
                  : ""
              }`}
            >
              <span>{link.icon}</span>
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
