import React from "react";
import { NavLink } from "react-router-dom";

export const NavbarItem = ({ name, to }) => {
  return (
    <li className="navbar_list">
      <NavLink to={to}>{name}</NavLink>
    </li>
  );
};
