import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.scss';

export default function NotFound(): React.JSX.Element {
  return (
    <main className={styles.NotFoundPage}>
      <div className={styles.Content}>
        <p className={styles.PageLabel}>/ Error</p>
        <p className={styles.ErrorCode}>404</p>
        <h1 className={styles.ErrorTitle}>This page doesn't exist</h1>
        <p className={styles.ErrorText}>The page you're looking for was moved, removed or never existed.
          Let's get you back to somewhere useful.</p>

        <div className={styles.Actions}>
          <NavLink to="/MainPage" className={styles.PrimaryBtn}>Back to home</NavLink>
          <NavLink to="/Projects" className={styles.SecondaryBtn}>View our projects</NavLink>
        </div>
      </div>
    </main>
  )
}
