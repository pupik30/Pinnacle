import React from "react";
import { useParams, NavLink } from 'react-router-dom';
import styles from './BlogDetails.module.scss';
import { Photo } from "../../file.ts";
import { blogPosts } from '../Blog/blogData';
import NotFound from '../NotFound/NotFound';

export default function BlogDetails(): React.JSX.Element {
  const { id } = useParams();
  const post = blogPosts.find((item) => item.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  const recentPosts = blogPosts.filter((item) => item.id !== post.id).slice(0, 2);

  return (
    <main className={styles.BlogDetailsPage}>

      <div className={styles.TopBar}>
        <NavLink to="/Blog" className={styles.BackLink}>← Back to all posts</NavLink>
      </div>

      <section className={styles.BlogHero}>
        <span className={styles.BlogTag}>{post.tag}</span>
        <h1 className={styles.HeroTitle}>{post.title}</h1>
        <p className={styles.HeroInfo}>{post.description}</p>

        <div className={styles.HeroMeta}>
          <div className={styles.Author}>
            <img src={post.author_avatar} alt={post.author_name} />
            <span>{post.author_name}</span>
          </div>
          <span className={styles.MetaItem}>
            <img src={Photo.Data} alt="" />
            {post.date_text}
          </span>
          <span className={styles.MetaItem}>{post.read_time}</span>
        </div>
      </section>

      <div className={styles.CoverImage}>
        <img src={post.img} alt={post.title} />
      </div>

      <section className={styles.ContentLayout}>
        <article className={styles.Article}>
          {post.body.map((block, index) => {
            if (block.type === 'heading') {
              return <h2 key={index}>{block.text}</h2>;
            }
            if (block.type === 'list') {
              return (
                <ul key={index}>
                  {block.items?.map((item) => <li key={item}>{item}</li>)}
                </ul>
              );
            }
            return <p key={index}>{block.text}</p>;
          })}
        </article>

        <aside className={styles.Sidebar}>
          <div className={styles.SideCard}>
            <p className={styles.SideTitle}>Table of content</p>
            <ul className={styles.TocList}>
              {post.table_of_contents.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className={styles.SideCard}>
            <p className={styles.SideTitle}>Share this article</p>
            <div className={styles.Socials}>
              <img src={Photo.Icon} alt="Facebook" />
              <img src={Photo.Icon2} alt="Instagram" />
              <img src={Photo.Icon3} alt="X" />
              <img src={Photo.Icon4} alt="LinkedIn" />
            </div>
          </div>

          <div className={styles.CtaCard}>
            <p className={styles.CtaTitle}>Have a project in mind?</p>
            <p className={styles.CtaText}>Tell us what you're planning and we'll help you shape it.</p>
            <NavLink to="/ContactUs" className={styles.CtaBtn}>Contact us</NavLink>
          </div>
        </aside>
      </section>

      <section className={styles.RecentSection}>
        <div className={styles.SectionHeader}>
          <h2 className={styles.SectionTitle}>
            <span className={styles.accentIcon}></span>
            Recent Articles
          </h2>
        </div>

        <div className={styles.RecentGrid}>
          {recentPosts.map((item) => (
            <NavLink key={item.id} to={`/BlogDetails/${item.id}`} className={styles.RecentCard}>
              <div className={styles.RecentImage}>
                <img src={item.img} alt={item.title} />
              </div>
              <div className={styles.RecentText}>
                <span className={styles.BlogTag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.RecentFooter}>
                  <span className={styles.RecentDate}>
                    <img src={Photo.Data} alt="" />
                    {item.date_text}
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
