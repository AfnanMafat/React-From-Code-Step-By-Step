import React from "react";
import { Link, Outlet } from "react-router";

export default function NavBar() {
  return (
    <>
      <div>
        <Link to={"/"}>HomePage</Link>
        <Link to={"/College"}>College</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/About"}>About</Link>
      </div>
      <Outlet />
    </>
  );
}
