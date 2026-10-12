import React from "react";
import { useState } from "react";
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js



import { Photo } from "../../../file.ts";

export default function Footer(): React.JSX.Element {
    return(
<>
<section className={styles.OrangeFut}>
    <div className={styles.OrangeBg}>
        <div className={styles.OrangeContent}>
            <p className={styles.OrangeContentTXT} >Let’s Build <img src={Photo.Vector}/> Something Extraordinary Together</p>
            <a href="#Header" className={styles.OrangeContentBTN}>View our projects</a>
        </div>
    </div>
</section>

<section className={styles.BlackFut}>
    <div className={styles.BlackBg}>
        <div className={styles.logoPhoto}>
            <img src={Photo.Logo} alt="" />
            <p>Pinnacle</p>
        </div>
    </div>
</section>
</>
)
}




