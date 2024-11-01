import { Bell, Menu, House, Box, Component, StickyNote, SquareCheckBig, Images, FileText, X } from "lucide-react";
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

          {/* mobile menu button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* navigation tabs */}
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

      {/* mobile menu for smaller screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-all duration-500 ease-out z-50 ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-full opacity-0 scale-95"
        }`}
      >
        {/* close button */}
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {/* mobile navigation links */}
        <nav className="flex flex-col p-4 space-y-10 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-600 hover:text-blue-600 flex items-center gap-2 ${
                location.pathname === link.path
                  ? "border-b-2 w-28 border-blue-600 font-medium text-blue-600"
                  : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{link.icon}</span>
              {link.name}
            </Link>
          ))}

          <div className="flex justify-center gap-4 items-center">
          <Bell size={32} className="text-gray-600" />
          <a
            href="https://github.com/BenedictaUche/tabler"
            target="_blank"
            rel="noopener noreferrer"

          >
            <button className="text-blue-500 border-2 border-blue-500 p-2 rounded-md ">
              Source code
            </button>
          </a>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
