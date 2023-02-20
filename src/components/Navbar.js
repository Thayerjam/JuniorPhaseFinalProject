import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/students">Students</Link>
      <Link to="/campuses">Campuses</Link>
    </div>
  );
};
