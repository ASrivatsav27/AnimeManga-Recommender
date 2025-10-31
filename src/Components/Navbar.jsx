import React from "react";
import { navLists, searchImg } from "../Constants";
import { Link } from "react-router-dom";
const Navbar = ({ query, setQuery }) => {
  return (
    <div className="w-full py-5 justify-between items-center">
      <nav className="flex w-full">
        <div className="flex flex-1 justify-center">
          {navLists.map((navItem) => (
            <Link
              key={navItem.text}
              to={navItem.path}
              className="px-5 text-sm cursor-pointer text-white hover:text-gray-300
              transition-all"
            >
              {navItem.text}
            </Link>
          ))}
          <div className="relative flex items-center ml-4">
            <img
              src={searchImg}
              alt="search"
              className="absolute left-3 w-4 h-4" // Position the icon absolutely
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-zinc-800 rounded-xl focus:outline-none h-8 w-full pl-10 pr-4 text-white"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Add left padding (pl-10)
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
