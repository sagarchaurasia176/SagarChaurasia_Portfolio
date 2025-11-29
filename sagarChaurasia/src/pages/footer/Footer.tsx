// create a simple footer component with tailwind css
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} Sagar Chaurasia. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
<a href="#" className="hover:text-gray-900 transition-colors">
              Last updated: November 30, 2025
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
