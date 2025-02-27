import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Pointer as Pinterest } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold">tour buddy</Link>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <select className="appearance-none bg-gray-800 border border-gray-700 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700">
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-gray-800 border border-gray-700 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700">
                <option>U.S. Dollar ($)</option>
                <option>Euro (€)</option>
                <option>British Pound (£)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end space-x-4 mt-4">
          <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
            <Facebook size={20} />
          </a>
          <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500">
            <Twitter size={20} />
          </a>
          <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700">
            <Instagram size={20} />
          </a>
          <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700">
            <Pinterest size={20} />
          </a>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Copyright 2025 Tour Buddy. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;