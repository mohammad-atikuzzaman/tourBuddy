import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-700">tour buddy</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Our Most Rated Guides
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Our Packages
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Most Desired Places
          </Link>

          <Link
            to="/"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
