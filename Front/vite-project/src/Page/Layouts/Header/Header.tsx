import React from "react";
import { useState } from "react";
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js

import { Photo } from "../../../file.ts";

export default function Header(): React.JSX.Element {

    return(
<>
<header>
    <div className={styles.headerBlockTop}  id="Header">
        <div className={styles.headerJC}>
            <div className={styles.logoPhoto}>
                <img src={Photo.Logo} alt="" />
                <p>Pinnacle</p>
            </div>
            <nav className={styles.nav}>
                <NavLink to={"MainPage"}  className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>Home</NavLink>
                <NavLink to={"AboutUs"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>About Us</NavLink>
                <NavLink to={"Projects"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Projects</NavLink>
                <NavLink to={"ServicePage"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Services</NavLink>
                <NavLink to={"Blog"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>News</NavLink>
            </nav> 
            <NavLink to={"ContactUs"} className={styles.ConectUs}>Contact us</NavLink>
        </div>
    </div>
</header>
</>
)
}

