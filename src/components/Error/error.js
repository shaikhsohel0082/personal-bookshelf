import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./error.module.css";
export default function Error() {
  return (
    <>
      <div className={Styles.div}>
        <h1 className={Styles.err}>404 Page Not Found</h1>
        <h6>The page you are looking for does not exist</h6>
        <h6>Contact your administrator</h6>
        <NavLink to={"/"}>Go to home</NavLink>
      </div>
    </>
  );
}
