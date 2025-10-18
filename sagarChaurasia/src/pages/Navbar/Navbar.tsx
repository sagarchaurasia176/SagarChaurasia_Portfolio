import React, { useState } from "react";
import { Menubar } from "../../data/MenuBar";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import Logo from "../../public/developer.png";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Left Side: Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center (Brand / Logo) */}
        <a href="/" className="text-lg font-bold text-gray-800">
          <img src={Logo} alt="Logo" className="h-8 w-8 inline-block mr-2" /> |
          Software Engineer
        </a>

        {/* Right Side (Desktop Links) */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            open
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible md:opacity-100 md:visible"
          }`}
        >
          {Menubar.map((link) => (
            <li key={link.title} className="md:ml-6 my-2 md:my-0">
              <a
                href={link.link}
                className="flex items-center px-4 py-2 md:px-0 text-gray-700 hover:text-blue-500 transition-colors"
              >
                {link.icon && (
                  <link.icon className="inline-block mr-2" size={18} />
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
