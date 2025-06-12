
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">R. Harish Balaji</h3>
          <p className="text-gray-400 mb-4">
            Final-year Computer Science Student | Passionate Developer | Aspiring Data Scientist
          </p>
          
          <div className="flex justify-center items-center space-x-1 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} R. Harish Balaji. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
