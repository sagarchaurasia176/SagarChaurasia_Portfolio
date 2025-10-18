// create a simple footer component with tailwind css
import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sagar Chaurasia. All rights
          reserved.
        </p>
        <p className="text-sm">Designed and Developed by Sagar Chaurasia</p>
      </div>
    </footer>
  );
};
export default Footer;
