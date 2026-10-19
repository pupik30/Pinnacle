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
<section className={styles.servisDiv}>
<p>sdsad</p>

</section>
</>
)}