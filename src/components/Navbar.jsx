import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold tracking-wide text-gray-800">GlobalElite Partner</h1>
      <ul className="flex space-x-6 text-lg font-medium">
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <li key={index}>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-all duration-300">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
