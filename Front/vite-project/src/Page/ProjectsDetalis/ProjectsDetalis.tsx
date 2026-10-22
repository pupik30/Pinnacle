import { Photo } from "../../file";
import styles from "../ProjectsDetalis/ProjectsDetalis.module.scss"
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";



export default function ProjectsDetalis():React.JSX.Element {

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
        <button><img src={Photo.Arrow} alt="" /> Back to all Projects</button>
        <p>The Grand Estate</p>
        <p>The Grand Estate is a stunning residential development featuring 12 custom-built homes, each with its own unique design and high-end amenities.
         Nestled in a picturesque setting, this community offers residents a truly luxurious living experience. </p>
    </div>
  </section>

  <section className={styles.Residential}>
    <div className={styles.servsiv}>
      <p>Residential Construction</p>
      <p>Pinnacle has a long history of delivering exceptional residential construction services, from custom homes to community developments 
        to renovations. Our team of experts works closely with our clients to understand their unique needs and preferences, ensuring that every
         project we undertake is a reflection of their personal style and vision.</p>
    </div>
  </section >

  <section className={styles.Base}>
    <img src={Photo.Rectangle13} alt="" />
  </section>

  <section className={styles.Long}>

    <div className={styles.LongL}>
      //1
      <div className={styles.LongLDiv}>
        <p className={styles.title_text}>Renovations</p>
        <p className={styles.text}>Whether you're looking to update a single room or transform an entire property,
          Pinnacle has the expertise and experience to get the job done right. Our team of renovation specialists works closely with our clients to develop a
          plan that meets their needs and budget, while ensuring that the finished product is both beautiful and functional.</p>
        <img src={Photo.imagehouse2} alt="" />
      </div> 

    </div>
    
    <div className={styles.LongR}>
      <div className={styles.Amenities}>
        <div className={styles. Amenities_Table}></div>
        <div className={styles.Amenities_Share}></div>
        <div className={styles.Amenities_Bar}></div>
      </div>
    </div>
  </section>



  
</section>

</>
)
}