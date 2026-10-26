import React from "react";
import styles from './AboutUs.module.scss';
import { NavLink } from 'react-router-dom';
import { Photo } from "../../file.ts";

interface achievementType {
  id: number;
  number: string;
  label: string;
}

interface awardType {
  id: number;
  year: string;
  text: string;
}

interface teamType {
  id: number;
  title_text: string;
  role: string;
  text: string;
  img: string;
}

const achievements: achievementType[] = [
  { id: 1, number: '10K', label: 'Clients' },
  { id: 2, number: '500', label: 'Projects' },
  { id: 3, number: '19', label: 'Languages' },
  { id: 4, number: '1K+', label: 'Employees' },
];

const awards: awardType[] = [
  { id: 1, year: '2021', text: '"Sustainable Design Award" from (USGBC)' },
  { id: 2, year: '2020', text: '"Builder of the Year" award' },
  { id: 3, year: '2022', text: '"Top 50 Fastest-Growing Companies"' },
];

const team: teamType[] = [
  {
    id: 1,
    title_text: 'John Doe',
    role: 'Founder and CEO',
    text: 'John founded Pinnacle in 2005 with a vision to change the way homes are built and lived in. He still leads every major project personally.',
    img: Photo.Member1,
  },
  {
    id: 2,
    title_text: 'Sarah Mitchell',
    role: 'Head of Design',
    text: 'Sarah leads our architecture and interior teams, turning client ideas into functional spaces that feel like home from the first day.',
    img: Photo.Member2,
  },
  {
    id: 3,
    title_text: 'Michael Carter',
    role: 'Project Director',
    text: 'Michael oversees construction from the first foundation pour to the final walkthrough, keeping timelines, budgets and quality on track.',
    img: Photo.Member3,
  },
];

export default function AboutUs(): React.JSX.Element {

  return (
    <main className={styles.AboutPage}>

      <section className={styles.AboutHero}>
        <div className={styles.HeroLeft}>
          <p className={styles.HeroLabel}>/ About Us</p>
          <p className={styles.HeroTitle}>We're <span className={styles.HeroAccent}></span> building<br />communities.</p>
        </div>

        <div className={styles.HeroRight}>
          <p className={styles.HeroInfo}>With a commitment to quality, innovation, and customer satisfaction,
            we've established ourselves as a trusted leader in the construction and real estate industry.
            We're passionate about building exceptional homes and communities that exceed our clients'
            expectations.</p>
          <NavLink to={"/ProjectsDetalis"} className={styles.HeroBtn}>View our projects</NavLink>
        </div>
      </section>

      <section className={styles.Gallery}>
        <img className={styles.GalleryMain} src={Photo.AboutTeam} alt="Pinnacle team working together" />
        <img className={styles.GallerySide} src={Photo.AboutInterior} alt="Modern residential interior" />
      </section>

      <section className={styles.Story} id="story">
        <div className={styles.StoryLeft}>
          <p className={styles.StoryTitle}><span>/</span>Our Story &amp; Values</p>
        </div>

        <div className={styles.StoryRight}>
          <p className={styles.StoryText}>Pinnacle was founded in 2005 by John Doe, a seasoned entrepreneur
            with a vision to create a company that would revolutionize the way homes are built and lived in.
            As Pinnacle's founder and CEO, John Doe has led the company to new heights, driven by his
            unwavering commitment to excellence.</p>

          <article className={styles.Quote}>
            <img className={styles.QuoteAvatar} src={Photo.Avatar5} alt="John Doe" />
            <div className={styles.QuoteContent}>
              <p className={styles.QuoteText}>"At Pinnacle, we believe that every home we build should be a
                masterpiece - a reflection of our clients' dreams and aspirations. That's why we're dedicated
                to pushing the boundaries of what's possible in construction and real estate."</p>
              <p className={styles.QuoteAuthor}>- John Doe, Founder and CEO</p>
            </div>
          </article>

          <p className={styles.StoryText}>Since its inception, Pinnacle has grown to become a leading player
            in the industry, completing over 500 projects and serving thousands of satisfied clients. Today,
            the company employs a team of over 200 professionals, each with a unique set of skills and
            expertise.</p>

          <div className={styles.Values} id="values">
            <p>At Pinnacle, we're guided by a set of core values that shape our approach to every project we
              undertake. These values include:</p>
            <ul>
              <li><strong>Quality:</strong> We're committed to delivering exceptional quality in every aspect
                of our work, from design to construction to customer service.</li>
              <li><strong>Innovation:</strong> We're always looking for new and innovative ways to improve our
                processes, products, and services, ensuring that our clients receive the best possible
                experience.</li>
              <li><strong>Customer Satisfaction:</strong> We're dedicated to exceeding our clients' expectations,
                providing them with a personalized and tailored experience that meets their unique needs and
                preferences.</li>
              <li><strong>Sustainability:</strong> We're committed to building sustainable homes and communities
                that minimize our impact on the environment and promote a healthier, more sustainable future.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.Achievements}>
        <div className={styles.SectionHeader}>
          <div className={styles.SectionText}>
            <h2 className={styles.SectionTitle}>
              <span className={styles.accentIcon}></span>
              Our Achievements
            </h2>
            <p className={styles.SectionDescription}>With the company now serving over 100 countries and
              available in 19 different languages. Our customer base is diverse and global, with a strong
              presence in Europe, Asia, and the Americas.</p>
          </div>
        </div>

        <div className={styles.StatsGrid}>
          {achievements.map((item) => (
            <div key={item.id} className={styles.StatCard}>
              <h3 className={styles.StatNumber}>{item.number}</h3>
              <p className={styles.StatLabel}>{item.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.AwardsGrid}>
          {awards.map((item) => (
            <div key={item.id} className={styles.AwardCard}>
              <h3 className={styles.AwardYear}>{item.year}</h3>
              <p className={styles.AwardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.Team} id="team">
        <div className={styles.SectionHeader}>
          <div className={styles.SectionText}>
            <h2 className={styles.SectionTitle}>
              <span className={styles.accentIcon}></span>
              Our experienced team
            </h2>
            <p className={styles.SectionDescription}>With a diverse range of skills and expertise, our team
              is dedicated to delivering exceptional results and exceeding our clients' expectations.</p>
          </div>
        </div>

        <div className={styles.TeamGrid}>
          {team.map((member) => (
            <article key={member.id} className={styles.TeamCard}>
              <div className={styles.TeamImage}>
                <img src={member.img} alt={member.title_text} />
              </div>
              <div className={styles.TeamInfo}>
                <h3>{member.title_text}</h3>
                <p className={styles.TeamRole}>{member.role}</p>
                <p className={styles.TeamText}>{member.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  )
}
