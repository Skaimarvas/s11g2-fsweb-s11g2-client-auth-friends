import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <NavLink to="/login"> LOGIN. </NavLink>
      <NavLink to="/"> FRIENDLIST. </NavLink>
      <NavLink to="/"> ADDFRIEND. </NavLink>
      <NavLink to="/"> LOGOUT. </NavLink>
    </div>
  );
}
