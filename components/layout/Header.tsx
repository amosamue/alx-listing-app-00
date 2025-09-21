import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">ALX Listings</div>
      <nav className="flex gap-4 mt-2 sm:mt-0">
        <button className="px-4 py-1 rounded bg-blue-500 text-white font-semibold">Sign In</button>
        <button className="px-4 py-1 rounded border border-blue-500 text-blue-500 font-semibold">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
