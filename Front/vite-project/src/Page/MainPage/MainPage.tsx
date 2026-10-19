import React from "react";
import { useState } from "react";
import styles from './MainPage.module.scss';
import { NavLink } from 'react-router-dom';
import { Photo } from "../../file.ts";
import { useEffect } from 'react';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js

interface houseType {
  id: number;
  title_text: string;
  text: string;
  adres: string; 
  img: string;
}

interface qualityType {
  id: number;
  tittle_text: string;
  text: string;
  img: string;
}
interface gridType {
  id: number;
  title_text: string;
  text: string;
  img: string;
}
interface main4Type {
  id: number;
  title_text: string;
  btn_text: string;
  data: string;
  img: string;
}
interface main5Type {
  id: number;
  title_text: string;
  text: string;
  }

export default function MainPage(): React.JSX.Element {

  const [main, setMain] = useState<houseType[] | null>(null);
  const [main2, setMain2] = useState<qualityType[] | null>(null);
  const [main3, setMain3] = useState<gridType[] | null>(null);
  const [main4, setMain4] = useState<main4Type[] | null>(null);
  const [main5, setMain5] = useState<main5Type[] | null>(null);


  useEffect(() => {
            const controller = new AbortController();

            //

        Promise.all([
        fetch('http://localhost:3000/main', { signal: controller.signal })
            .then((r) => r.json() as Promise<houseType[]>),
        ])
        .then(([mainRows]) => {
            setMain(mainRows);
        })

            //

        Promise.all([
        fetch('http://localhost:3000/main2', { signal: controller.signal })
            .then((r) => r.json() as Promise<qualityType[]>),
        ])
        .then(([main2Rows]) => {
            setMain2(main2Rows);
        })

            //

        Promise.all([
        fetch('http://localhost:3000/main3', { signal: controller.signal })
            .then((r) => r.json() as Promise<gridType[]>),
        ])
        .then(([main3Rows]) => {
            setMain3(main3Rows);
        })

            //

        Promise.all([
        fetch('http://localhost:3000/main4', { signal: controller.signal })
            .then((r) => r.json() as Promise<main4Type[]>),
        ])
        .then(([main4Rows]) => {
            setMain4(main4Rows);
        })

            //

        Promise.all([
        fetch('http://localhost:3000/main5', { signal: controller.signal })
            .then((r) => r.json() as Promise<main5Type[]>),
        ])
        .then(([main5Rows]) => {
            setMain5(main5Rows);
        })

            //

        .catch((e) => {
            if ((e as Error).name !== 'AbortError') {
            console.error("Ошибка при получении данных:", e);
            }
        });



  return () => controller.abort();
}, []);
return(
<>
<main className={styles.MainPage}>
    <div className={styles.FirstSection}>
        <div className={styles.MainDiv}>
            <p className={styles.MainDivTitle}>Creating a Better<br /> Tomorrow, One <br /> Home at a Time</p>
            <p className={styles.MainDivInfo}>We've built a reputation for delivering exceptional
            results and exceeding our clients' expectations.
            From luxurious residential homes to state-of-the-art 
            commercial properties, our team of experts is dedicated 
            to bringing your vision to life.</p>
            <div className={styles.MainBtn}>
                <button className={styles.MainBtnL}>Schedule a Call</button>
                <button className={styles.MainBtnR}>View Our Projucts</button>
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
    </div>

    <div className={styles.building}>
        <div className={styles.bild}>
            <div className={styles.TopGroup}>
                <div className={styles.DivText}>
                    <p>We're <img src={Photo.shape} alt="" /> building communities.</p>
                </div>
                <div className={styles.DivTextLitle}>
                    <p>With a commitment to excellence and a focus on innovation, we've established ourselves as a leader in the real estate and construction industry.</p>
                </div>
            </div>
            <div className={styles.BotomGrop}>
                <div className={styles.LearnMoreUp}>
                    <button>Learn More About Us...</button>

                </div>
                <div className={styles.peoplbot}>
                    <div className={styles.popl}>
                        <div className={styles.LeftPeopl}>
                            <img src={Photo.ClientImages} alt="" />
                        </div>
                        <div className={styles.RightStar}>
                            <img src={Photo.Starts2} alt="" />
                            <p>4.3/5 Rated by 300+ Professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    




    <section className={styles.headerContainer}>
    <div className={styles.textBlock}>

        <h2 className={styles.title}>
        <span className={styles.accentIcon}></span>
        Featured Projects
        </h2>
        
        <p className={styles.description}>
        we've built a reputation for delivering exceptional results and exceeding our clients' expectations. 
        From luxurious residential homes to state-of-the-art commercial properties, our team of experts is 
        dedicated to bringing your vision to life.
        </p>
    </div>

    <div className={styles.buttonBlock}>
        <button className={styles.viewAllBtn}>
        View all Projects
        </button>
    </div>
    </section>






    {/* <section className={styles.container}>

    <div className={styles.grid}>
        {projectsData.map((project) => (
        <div key={project.id} className={styles.card}>

            <div className={styles.imageWrapper}>
            <img src={project.image} alt={project.title} />
            </div>

            <div className={styles.content}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>

            <div className={styles.location}>
                <span className={styles.pinIcon}>📍</span> 
                {project.location}
            </div>

            <div className={styles.tagsContainer}>
                <span className={styles.tag}>{project.tag}</span>
            </div>
            </div>

            <button className={styles.actionBtn}>
            View Property
            </button>
            
        </div>
        ))}
    </div>


    <div className={styles.paginationPanel}>
        <div className={styles.counter}>01/03</div>
        <div className={styles.navButtons}>
        <button className={styles.arrowBtn} aria-label="Previous slide">←</button>
        <button className={styles.arrowBtn} aria-label="Next slide">→</button>
        </div>
    </div>
    </section> */}
    <div className={styles.DivBotom}>
        {main && main.map((project) => (  
            <div key={project.id} className={styles.CardHous}>
                
                <div className={styles.ImageHous}>
                    <img src={project.img} />
                </div>

                
                <div className={styles.CardText}>
                    <h3>{project.title_text}</h3>
                    <p>{project.text}</p>
                    
                    
                    <div className={styles.Location}>
                    <img src={Photo.Location} alt="Location" />
                    <span>{project.adres}</span>
                    </div>
                    <div className={styles.ViewButton}>
                        <button className={styles.ViewPropertyBtn}>View Property</button>
                    </div>
                </div>

            </div>
        ))}
    </div>


<section className={styles.services_section}>
  <div className={styles.services_section_container}>
    
    <h2 className={styles.services_section_title}>
      Quality service you get <span className={styles.services_section_asterisk}>*</span>
    </h2>
    
    <p className={styles.services_section_description}>
      At Pinnacle, we offer a wide range of services to cater to your unique needs. From residential construction to commercial development, we've got you covered.
    </p>
    
    <div className={styles.services_section_tabs}>
      {/* Активная кнопка объединяет базовый класс и модификатор */}
      <button className={`${styles.services_section_tab} ${styles.services_section_tab_active}`}>
        Residential
      </button>
      <button className={styles.services_section_tab}>Property Management</button>
      <button className={styles.services_section_tab}>Commercial</button>
      <button className={styles.services_section_tab}>Development</button>
    </div>

  </div>
</section>

    <section className={styles.DivBotom}>
        {main2 && main2.map((project) => (  
            <div key={project.id} className={styles.CardHous}>
                
                <div className={styles.ImageHous}>
                    <img src={project.img} />
                </div>
                <div className={styles.CardText}>
                    <h3>{project.tittle_text}</h3>
                    <p>{project.text}</p>
                    <a href="">Learn more</a>
                </div>

            </div>
        ))}
    </section>

<section className={styles.services_section}>
  <div className={styles.services_section_container}>
    
    <h2 className={styles.services_section_title}>
      What Our Clients Say <span className={styles.services_section_asterisk}>*</span>
    </h2>
    
    <p className={styles.services_section_description}>
      At Pinnacle, we offer a wide range of services to cater to your unique needs. From residential construction to commercial development, we've got you covered.
    </p>
    
    <div className={styles.services_section_tabs}>
        <div className={styles.peoplbot}>
            <div className={styles.popl}>
                <div className={styles.LeftPeopl}>
                    <img src={Photo.ClientImages} alt="" />
                </div>
                <div className={styles.RightStar}>
                    <img src={Photo.Starts2} alt="" />
                    <p>4.3/5 Rated by 300+ Professionals</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</section>



<section className={styles.OurClientsSay}>
    <div className={styles.OurClientsSayGrid}>
        {main3 && main3.map((project) => (  
            <article key={project.id} className={styles.OurClientsCard}>
                <img src={project.img} />
                <div className={styles.OurClientsP}>
                    <p>{project.title_text}</p>                        
                    <p>{project.text}</p>                        
                </div>
            </article>
        ))}
    </div>
</section>

<section className={styles.headerContainer}>
<div className={styles.textBlock}>

    <h2 className={styles.title}>
    <span className={styles.accentIcon}></span>
    Latest News
    </h2>
    
    <p className={styles.description}>
        We've built a reputation for delivering exceptional results and exceeding our clients' expectations. 
        From luxurious residential homes to state-of-the-art commercial properties, our team of experts is
        dedicated to bringing your vision to life.
    </p>
</div>

<div className={styles.buttonBlock}>
    <button className={styles.viewAllBtn}>
    View all blog post
    </button>
</div>
</section>


<section className={styles.DivBotom2}>
    {main4 && main4.map((project) => (  
        <div key={project.id} className={styles.CardHous}>
            
            <div className={styles.ImageHous}>
                <img src={project.img} />
            </div>
            <div className={styles.CardText}>
                <p>{project.btn_text}</p>
                <h3>{project.title_text}</h3>
                <div >
                    <div className={styles.CardTextdiv}>
                        <img src={Photo.Data} alt="" />
                        <p className={styles.data}> {project.data} </p>
                    </div>
                    <a href="">Read more...</a>
                </div>
            </div>

        </div>
    ))}
</section>

<section className={styles.headerContainer}>
<div className={styles.textBlock}>
    <h2 className={styles.title}>
        <span className={styles.accentIcon} style={{ fontSize: '32px' }}></span>
    Frequently Asked Questions
    </h2>
</div>
</section>

<section className={styles.OurClientsSay2}>
    <div className={styles.OurClientsSayGrid2}>
        {main5 && main5.map((project) => (  
            <article key={project.id} className={styles.OurClientsCard2}>
                <div className={styles.OurClientsP2}>
                    <p>{project.title_text}</p>                        
                    <p>{project.text}</p>                        
                </div>
            </article>
        ))}
    </div>
</section>

</main>
</>
)
}
