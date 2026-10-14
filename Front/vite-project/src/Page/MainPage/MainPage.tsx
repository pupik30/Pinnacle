import React from "react";
import { useState } from "react";
import styles from './MainPage.module.scss';
import { NavLink } from 'react-router-dom';
// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js
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



export default function MainPage(): React.JSX.Element {

  const [main, setMain] = useState<houseType[] | null>(null);
  useEffect(() => {
        const controller = new AbortController();
     Promise.all([
      fetch('http://localhost:3000/main', { signal: controller.signal })
        .then((r) => r.json() as Promise<houseType[]>),
    ])
      .then(([mainRows]) => {
        setMain(mainRows);
      })
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
                        <img src={Photo.shape} alt="Location" />
                        <span>{project.adres}</span>
                        </div>
                        <div className={styles.ViewButton}>
                            <button className={styles.ViewPropertyBtn}>View Property</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>




    </main>

</>
)
}
