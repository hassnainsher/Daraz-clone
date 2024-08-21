import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-orange-600 flex items-center justify-between p-4 sticky-top">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="Daraz Logo" className="h-8" />
      </div>
      
      {/* Middle - Search bar */}
      <div className="flex-grow mx-4">
        <input 
          type="text" 
          placeholder="Search in Daraz"
          className="w-full p-2 rounded bg-white text-gray-700 focus:outline-none"
        />
      </div>

      {/* Right side - Links */}
      <div className="flex items-center space-x-4 text-white text-sm">
        <a href="#" className="no-underline text-white">SAVE MORE ON APP</a>
        <a href="#" className="no-underline text-white">SELL ON DARAZ</a>
        <a href="#" className="no-underline text-white">HELP & SUPPORT</a>
        <a href="#" className="no-underline text-white">LOGIN</a>
        <a href="#" className="no-underline text-white">SIGN UP</a>
        <a href="#" className="no-underline text-white">ردان تبدیل کریں</a>
        <a href="#" className="text-xl"><i className="fas fa-shopping-cart"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
