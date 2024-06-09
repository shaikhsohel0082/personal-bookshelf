import React from "react";
import Styles from "./navbar.module.css";
import { NavLink, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className={Styles.nav}>
        <NavLink to={"/"}>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/7935/7935303.png" />
            Bookshelf
          </div>
        </NavLink>
        <NavLink to={"/mycollection"}>
          <div>My Bookshelf</div>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
