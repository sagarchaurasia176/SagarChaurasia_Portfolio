import React, { useState } from "react";
import { Menubar } from "../../data/MenuBar";
import { Menu, X } from "lucide-react"; // hamburger + close icons
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4 flex items-center justify-center h-16">
      
        {/* Center: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {Menubar.map((link) => (
            <li key={link.title}>
              <a
                href={link.link}
                target={link.target}
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors font-medium"
              >
                {link.icon && (
                  <link.icon className="inline-block mr-2" size={18} />
                )}
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col md:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
            open
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          {Menubar.map((link) => (
            <li key={link.title} className="border-b border-gray-100 last:border-b-0">
              <a
                href={link.link}
                className="flex items-center px-6 py-4 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors"
              >
                {link.icon && (
                  <link.icon className="inline-block mr-3" size={18} />
                )}
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
