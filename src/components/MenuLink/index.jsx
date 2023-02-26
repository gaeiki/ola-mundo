import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({texto, pagina}) {


  return (
    <NavLink to={pagina} className={({isActive}) => `${styles.link} ${isActive ? styles.linkDestacado : ""}`} end>
      {texto}
    </NavLink>
  );
}
