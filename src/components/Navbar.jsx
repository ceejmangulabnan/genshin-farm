import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between px-6 py-4 shadow-md">
      <Link to="/">
        <h1 className="navbar__title text-xl">Genshin Farm Guide</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Navbar;
