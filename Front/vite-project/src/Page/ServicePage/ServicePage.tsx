import React from "react";
import { useState } from "react";
import styles from '../ServicePage/ServicePage.module.scss';
import { NavLink } from 'react-router-dom';
import { Photo } from "../../file.ts";
import { useEffect } from 'react';

export default function ServicePage(): React.JSX.Element {


//   const [main, setMain] = useState<houseType[] | null>(null);



  useEffect(() => {
            const controller = new AbortController();

            //

        // Promise.all([
        // fetch('http://localhost:3000/main', { signal: controller.signal })
        //     .then((r) => r.json() as Promise<houseType[]>),
        // ])
        // .then(([mainRows]) => {
        //     setMain(mainRows);
        // })


        // .catch((e) => {
        //     if ((e as Error).name !== 'AbortError') {
        //     console.error("Ошибка при получении данных:", e);
        //     }
        // });



  return () => controller.abort();
}, []);
return(

<>
<section className={styles.ServicePagemain}>

  <section className={styles.servisDiv}>
    <div className={styles.servsiv}>
      <p>Bringing Your Vision to Life</p>
      <p>Pinnacle's commitment to excellence extends beyond just constructing buildings - it's about crafting exceptional spaces that inspire and delight. </p>
    </div>

    <img src={Photo.imagehouse} alt="" />
  </section>

  <section className={styles.Residential}>
    <div className={styles.servsiv}>
      <p>Residential Construction</p>
      <p>Pinnacle has a long history of delivering exceptional residential construction services, from custom homes to community developments 
        to renovations. Our team of experts works closely with our clients to understand their unique needs and preferences, ensuring that every
         project we undertake is a reflection of their personal style and vision.</p>
    </div>
  </section >

  <section className={styles.LongestLong}>
    <div className={styles.LeftLong}><button>Schedule a Calll</button></div>
    <div className={styles.RightLong}>
      <div className={styles.RightDiv}>
        <p className={styles.title_text}>Custom Homes</p>
        <p className={styles.text}>At Pinnacle, we specialize in designing and building custom homes
          that are tailored to our clients' specific needs and preferences. Our team of architects
          and designers work closely with our clients to create 
          a home that is both beautiful and functional, incorporating the latest technologies and 
          materials to ensure that it is energy-efficient, durable, and comfortable.</p>
        <img src={Photo.imagehouse2} alt="" />


      </div>
    </div>

  </section>

</section>
</>
)}