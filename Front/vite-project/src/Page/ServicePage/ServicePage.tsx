import React from "react";
import { useState } from "react";
import styles from './ServicePage.module.scss';
import { NavLink } from 'react-router-dom';
import { Photo } from "../../file.ts";
import { useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css'; 


export default function ServicePage(): React.JSX.Element {
  const [value, setValue] = useState();

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
      //1
      <div className={styles.RightDiv}>
        <p className={styles.title_text}>Custom Homes</p>
        <p className={styles.text}>At Pinnacle, we specialize in designing and building custom homes
          that are tailored to our clients' specific needs and preferences. Our team of architects
          and designers work closely with our clients to create 
          a home that is both beautiful and functional, incorporating the latest technologies and 
          materials to ensure that it is energy-efficient, durable, and comfortable.</p>
        <img src={Photo.imagehouse2} alt="" />
      </div>
      //2
      <div className={styles.RightDiv}>
        <p className={styles.title_text}>Community Development</p>
        <p className={styles.text}>Pinnacle has a proven track record of developing vibrant, sustainable 
          communities that offer a high quality of life for residents. Our team of experts works closely with local authorities 
          and stakeholders to create communities that are well-planned, well-designed, and well-connected, with a range of amenities
            and services that cater to the needs of residents.</p>
        <img src={Photo.imagehouse2} alt="" />
      </div> 
      //3
      <div className={styles.RightDiv}>
        <p className={styles.title_text}>Renovations</p>
        <p className={styles.text}>Whether you're looking to update a single room or transform an entire property,
          Pinnacle has the expertise and experience to get the job done right. Our team of renovation specialists works closely with our clients to develop a
          plan that meets their needs and budget, while ensuring that the finished product is both beautiful and functional.</p>
        <img src={Photo.imagehouse2} alt="" />
      </div> 
    </div>

  </section>


  <section className={styles.Massage}>
    <div className={styles.formdiv}>
      <div className={styles.formTitle}><p><span>/</span>Have a project in your mind?</p></div>
      <div className={styles.formMain}>
        <div className={styles.formMainTop}>
          
          <input className={styles.inputbox}type="text" placeholder="Name" required />

          <div className={styles.phoneInputCustom}>
            <PhoneInput
              defaultCountry="RU" // Камерун по умолчанию, как на скрине
              placeholder="Phone Number"
              value={value}
              onChange={setValue}
              required
            />
          </div>
            
          <input className={styles.inputbox}type="email" placeholder="Business Email" required />


          <div className={styles.selectWrapper}>
            <img src={Photo.MiniIcon6} alt="" />
            <select className={styles.selectBox}>
              <option value="" disabled hidden>Select budget</option>
              <option value="low">Less than $5,000</option>
              <option value="medium">$5,000 - $10,000</option>
              <option value="high">$10,000+</option>
            </select>
             <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
          </div>

          <div className={styles.selectWrapper}>
            <img src={Photo.MiniIcon6} alt="" />
            <select className={styles.selectBox} defaultValue="">
              <option value="" disabled hidden>Preferred Location</option>
              <option value="1">Kiiv</option>
              <option value="2">KBK</option>
              <option value="3">Balton</option>
              
            </select>
              <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
          </div>

          <div className={styles.selectWrapper}>
            <img src={Photo.MiniIcon6} alt="" />
            <select className={styles.selectBox} defaultValue="">
              {/* Этот вариант заблокирован и скрыт, он работает как заголовок-подсказка */}
              <option value="" disabled hidden>Service you are interested in</option>
              
              {/* Сюда пишем нужные вам цифры для выбора */}
              <option value="1">Один</option>
              <option value="2">ДВА</option>
              <option value="3">Бургер меню</option>
              <option value="4">Я хочу вкусно и точка</option>
            </select>
              <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
          </div>


        </div>
        <div className={styles.formMainMid}>
          <textarea className={styles.textareaBox} placeholder="Message" required/>
        </div>
        <div className={styles.formMainBot}>
          <div  className={styles.formMainBotcheckbox}>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" className={styles.customCheckbox} id="agree" />
              <label htmlFor="agree" className={styles.checkboxLabel}>
                I agree to the terms and conditions
              </label>
            </div>  
            <button>
              Send
              <img src={Photo.SandTG} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
</>
)}