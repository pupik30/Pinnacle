import React from "react";
import { useState } from "react";
import styles from './Blog.module.scss';
import { NavLink } from 'react-router-dom';
import { Photo } from "../../file.ts";
import { blogPosts } from './blogData';

const tabs = [
  { key: 'all', label: 'ALL' },
  { key: 'Home Design', label: 'Home Design' },
  { key: 'Sustainability', label: 'Sustainability' },
  { key: 'Renovation', label: 'Renovation' },
];

export default function Blog(): React.JSX.Element {
  const [category, setCategory] = useState('all');

  const visiblePosts = category === 'all'
    ? blogPosts
    : blogPosts.filter((post) => post.tag === category);

  return (
    <main className={styles.BlogPage}>

      <section className={styles.BlogHero}>
        <div className={styles.HeroLeft}>
          <p className={styles.HeroLabel}>/ Our Blog</p>
          <p className={styles.HeroTitle}>Get the latest news</p>
        </div>

        <div className={styles.HeroRight}>
          <p className={styles.HeroInfo}>At Pinnacle, we're passionate about sharing our knowledge and
            expertise with our audience. Our blog is dedicated to providing valuable insights, tips, and
            trends in the construction and real estate industries.</p>
        </div>
      </section>

      <section className={styles.BlogContent}>
        <div className={styles.Tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.Tab} ${category === tab.key ? styles.ActiveTab : ''}`}
              onClick={() => setCategory(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.BlogGrid}>
          {visiblePosts.map((post) => (
            <NavLink key={post.id} to={`/BlogDetails/${post.id}`} className={styles.BlogCard}>
              <div className={styles.BlogImage}>
                <img src={post.img} alt={post.title} />
              </div>

              <div className={styles.BlogText}>
                <span className={styles.BlogTag}>{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <div className={styles.BlogFooter}>
                  <span className={styles.BlogDate}>
                    <img src={Photo.Data} alt="" />
                    {post.date_text}
                  </span>
                  <span className={styles.ReadMore}>Read more...</span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

    </main>
  )
}
