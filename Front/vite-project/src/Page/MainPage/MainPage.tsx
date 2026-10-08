import React from "react";
import { useState } from "react";
import styles from './MainPage.module.scss';
import { NavLink } from 'react-router-dom';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js



import { Photo } from "../../file.ts";

export default function MainPage(): React.JSX.Element {
return (
<>
<main className={styles.MainPage}>
    <div className={styles.MainDiv}>
        <p className={styles.MainDivTitle}>Creating a Better<br /> Tomorrow, One <br /> Home at a Time</p>
        <p className={styles.MainDivInfo}>We've built a reputation for delivering exceptional
        results and exceeding our clients' expectations.
        From luxurious residential homes to state-of-the-art 
        commercial properties, our team of experts is dedicated 
        to bringing your vision to life.</p>
        <div className={styles.MainBtn}>
            <div className={styles.MainBtnL}>Schedule a Call</div>
            <div className={styles.MainBtnR}>View Our Projucts</div>
        </div>
    </div>
    <div className={styles.MainDivTower}><img src={Photo.Tower} alt="" />

        <div className={styles.Comment1}>
            <div className={styles.CommentPad}>
                <div className={styles.CommentPadL}><img src={Photo.Eblo1} alt="" /></div>
                <div className={styles.CommentPadR}>
                    <div className={styles.CommentPadRP}>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>I highly recommend, My home exactly what I wanted</p>
                        <p>Amanda | Actor</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.Comment2}>
            <div className={styles.CommentPad}>
                <div className={styles.CommentPadL}><img src={Photo.Eblo2} alt="" /></div>
                <div className={styles.CommentPadR}>
                    <div className={styles.CommentPadRP}>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>Pinnacle is my GO-TO when it comes to real estate</p>
                        <p>James | CEO of Crazy Bank</p>
                    </div>
                </div>
            </div>
        </div>
    
    </div>




</main>

</>
);
}
