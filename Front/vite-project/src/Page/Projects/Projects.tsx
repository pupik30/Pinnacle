import React from "react";
import { useState } from "react";
import styles from './Projects.module.scss';
import { NavLink } from 'react-router-dom';
import { Photo } from "../../file.ts";

interface projectType {
  id: number;
  title_text: string;
  text: string;
  location: string;
  tag: string;
  img: string;
}

const projects: projectType[] = [
  {
    id: 1,
    title_text: 'The Grand Estate',
    text: 'A stunning residential development of 12 custom-built homes, each with its own unique design and high-end amenities.',
    location: 'Mayobe',
    tag: 'Residential',
    img: Photo.Card_image,
  },
  {
    id: 2,
    title_text: 'The Skyline',
    text: 'A modern commercial tower with flexible office floors, panoramic views and a public plaza on the ground level.',
    location: 'Douala',
    tag: 'Commercial',
    img: Photo.Tower,
  },
  {
    id: 3,
    title_text: 'The Village',
    text: 'A walkable community of 48 family homes, green courtyards and shared spaces designed for everyday life.',
    location: 'Yaoundé',
    tag: 'Community',
    img: Photo.Card_image2,
  },
  {
    id: 4,
    title_text: 'The Old Mill',
    text: 'A careful conversion of a historic industrial building into lofts, studios and a small riverside market.',
    location: 'Buea',
    tag: 'Renovation',
    img: Photo.Rectangle13,
  },
  {
    id: 5,
    title_text: 'The Business Hub',
    text: 'A mixed-use complex that combines offices, retail and short-stay apartments around a covered courtyard.',
    location: 'Douala',
    tag: 'Commercial',
    img: Photo.Card_image3,
  },
  {
    id: 6,
    title_text: 'Riverside Terraces',
    text: 'Waterfront residences with private terraces, landscaped promenades and direct access to the river park.',
    location: 'Limbe',
    tag: 'Residential',
    img: Photo.Card_image4,
  },
];

const locations = ['Mayobe', 'Douala', 'Yaoundé', 'Buea', 'Limbe'];
const types = ['Residential', 'Commercial', 'Community', 'Renovation'];

export default function Projects(): React.JSX.Element {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const visibleProjects = projects.filter((project) => {
    const matchSearch = project.title_text.toLowerCase().includes(search.toLowerCase());
    const matchLocation = location ? project.location === location : true;
    const matchType = type ? project.tag === type : true;
    return matchSearch && matchLocation && matchType;
  });

  const resetFilters = () => {
    setSearch('');
    setLocation('');
    setType('');
  };

  return (
    <main className={styles.ProjectsPage}>

      <section className={styles.ProjectsHero}>
        <div className={styles.HeroLeft}>
          <p className={styles.HeroLabel}>/ Our Portfolio</p>
          <p className={styles.HeroTitle}>Building beyond expectations</p>
        </div>

        <div className={styles.HeroRight}>
          <p className={styles.HeroInfo}>Explore a curated selection of our finest residential, commercial,
            and mixed-use developments - each one shaped by a commitment to craft, innovation, and
            enduring quality.</p>
        </div>
      </section>

      <section className={styles.MapSection}>
        <img src={Photo.ProjectsMap} alt="Map of Pinnacle projects" />
      </section>

      <section className={styles.Filters}>
        <input
          className={styles.Search}
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className={styles.Select} value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Location</option>
          {locations.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <select className={styles.Select} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Type</option>
          {types.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <button className={styles.ResetBtn} onClick={resetFilters}>Reset filters</button>
      </section>

      <section className={styles.ProjectsList} id="projects">
        <div className={styles.ProjectsGrid}>
          {visibleProjects.map((project) => (
            <article key={project.id} className={styles.ProjectCard}>
              <div className={styles.ProjectImage}>
                <img src={project.img} alt={project.title_text} />
              </div>

              <div className={styles.ProjectText}>
                <h3>{project.title_text}</h3>
                <p>{project.text}</p>

                <div className={styles.ProjectLocation}>
                  <img src={Photo.Location} alt="Location" />
                  <span>{project.location}</span>
                </div>

                <span className={styles.ProjectTag}>{project.tag}</span>

                <NavLink to={"/ProjectsDetalis"} className={styles.ProjectBtn}>View Property</NavLink>
              </div>
            </article>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className={styles.Empty}>No projects found. Try changing the filters.</p>
        )}
      </section>

    </main>
  )
}
