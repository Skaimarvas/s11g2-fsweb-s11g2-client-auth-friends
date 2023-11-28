import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>FRIENDS DATABASE</h1>
      <NavLink to="/login"> LOGIN. </NavLink>
      <NavLink to="/friendlist"> FRIENDLIST. </NavLink>
      <NavLink to="/"> ADDFRIEND. </NavLink>
      <NavLink to="/"> LOGOUT. </NavLink>
    </div>
  );
}
