import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 text-center shadow-md">
      <NavLink to="/" className="mx-4 text-black no-underline hover:text-blue-500">
        Home
      </NavLink>
      <NavLink to="/login" className="mx-4 text-black no-underline hover:text-blue-500">
        Login
      </NavLink>
      <NavLink to="/fav" className="mx-4 text-black no-underline hover:text-blue-500">
        Favourites
      </NavLink>
    </nav>
  );
};

export default Navbar;
