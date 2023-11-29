import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-around border p-3">
      <div>
        <h1 className="text-2xl font-bold">FRIENDS DATABASE</h1>
      </div>
      <div className="flex  gap-10">
        <div>
          {!localStorage.getItem("token") && (
            <NavLink
              className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              to="/login"
            >
              {" "}
              LOGIN.{" "}
            </NavLink>
          )}
        </div>
        <div>
          <NavLink
            className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            to="/friendlist"
          >
            {" "}
            FRIENDLIST.{" "}
          </NavLink>
        </div>
        <div>
          <NavLink
            className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            to="/addfriend"
          >
            {" "}
            ADDFRIEND.{" "}
          </NavLink>
        </div>
        <div>
          {localStorage.getItem("token") && (
            <NavLink
              className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              to="/logout"
            >
              {" "}
              LOGOUT.{" "}
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
