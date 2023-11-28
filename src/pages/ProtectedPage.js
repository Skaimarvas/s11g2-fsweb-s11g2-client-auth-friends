import React from "react";
import { Redirect } from "react-router-dom";
import PageComponent from "./PageComponent";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function ProtectedPage({ children }) {
  const { pathname } = useLocation();
  console.log("PATHNAME", pathname);
  return localStorage.getItem("token") ? (
    children
  ) : (
    <Redirect to={{ pathname: "/login", state: { referrer: pathname } }} />
  );
}
