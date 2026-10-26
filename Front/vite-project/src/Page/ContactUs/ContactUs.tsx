import React from "react";
import { useState } from "react";
import styles from './ContactUs.module.scss';
import { Photo } from "../../file.ts";
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';

const faq = [
  {
    question: 'How do I start a project with Pinnacle?',
    answer: "Send us a short description of what you're planning. We'll reply within two business days and arrange a call to discuss the site, the budget and the next steps.",
  },
  {
    question: 'Do you work outside of the city?',
    answer: 'Yes. We currently build across the region and take on projects within a two-hour drive of our office. Travel costs are always agreed before the work starts.',
  },
  {
    question: 'Can you work with my architect?',
    answer: "Of course. We often join projects that already have a design team and focus on buildability, cost control and delivering the drawings on site.",
  },
  {
    question: 'How long does a typical project take?',
    answer: 'A renovation usually takes three to six months, while a new home takes nine to eighteen months depending on size, permits and materials.',
  },
];

export default function ContactUs(): React.JSX.Element {
  const [phone, setPhone] = useState<string | undefined>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className={styles.ContactPage}>

      <section className={styles.ContactHero}>
        <div className={styles.HeroLeft}>
          <p className={styles.HeroLabel}>/ Contact us</p>
          <p className={styles.HeroTitle}>Let's build something together</p>
        </div>

        <div className={styles.HeroRight}>
          <p className={styles.HeroInfo}>Whether you're planning a new home, a renovation or a commercial
            project, our team is ready to help. Tell us about your idea and we'll get back to you shortly.</p>
        </div>
      </section>

      <div className={styles.CoverImage}>
        <img src={Photo.ContactCover} alt="Pinnacle office" />
      </div>

      <section className={styles.ContactLayout}>

        <aside className={styles.Sidebar}>
          <div className={styles.InfoBlock}>
            <p className={styles.BlockTitle}>Get in Touch</p>
            <a href="mailto:hello@pinnacle.com" className={styles.Pill}>hello@pinnacle.com</a>
            <a href="tel:+237671123456" className={styles.Pill}>+237 6 71 12 34 56</a>
          </div>

          <div className={styles.InfoBlock}>
            <p className={styles.BlockTitle}>Our Office</p>
            <p className={styles.Address}>Rue 12, Bonapriso<br />Douala, Cameroon</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className={styles.DirectionsBtn}
            >
              Get Directions
            </a>
          </div>

          <div className={styles.InfoBlock}>
            <p className={styles.BlockTitle}>Follow Us</p>
            <div className={styles.Socials}>
              <img src={Photo.Icon} alt="Facebook" />
              <img src={Photo.Icon2} alt="Instagram" />
              <img src={Photo.Icon3} alt="X" />
              <img src={Photo.Icon4} alt="LinkedIn" />
            </div>
          </div>
        </aside>

        <div className={styles.FormSection}>
          <div className={styles.FormTitle}>
            <span className={styles.accentIcon}></span>
            Have a project in your mind?
          </div>

          <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.FormRow}>
              <input className={styles.Input} type="text" placeholder="Name" required />
              <div className={styles.PhoneInputCustom}>
                <PhoneInput
                  defaultCountry="RU"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={setPhone}
                  required
                />
              </div>
            </div>

            <div className={styles.FormRow}>
              <input className={styles.Input} type="email" placeholder="Business Email" required />

              <div className={styles.SelectWrapper}>
                <select className={styles.SelectBox} defaultValue="" required>
                  <option value="" disabled hidden>Service you are interested in</option>
                  <option value="residential">Residential construction</option>
                  <option value="commercial">Commercial construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="community">Community development</option>
                </select>
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            <div className={styles.FormRow}>
              <div className={styles.SelectWrapper}>
                <select className={styles.SelectBox} defaultValue="">
                  <option value="" disabled hidden>Select budget</option>
                  <option value="low">Less than $5,000</option>
                  <option value="medium">$5,000 - $10,000</option>
                  <option value="high">$10,000+</option>
                </select>
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              <div className={styles.SelectWrapper}>
                <select className={styles.SelectBox} defaultValue="">
                  <option value="" disabled hidden>Preferred Location</option>
                  <option value="douala">Douala</option>
                  <option value="yaounde">Yaoundé</option>
                  <option value="buea">Buea</option>
                  <option value="limbe">Limbe</option>
                </select>
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            <div className={styles.TextareaWrapper}>
              <textarea className={styles.Textarea} placeholder="Message" required />
            </div>

            <div className={styles.FormFooter}>
              <div className={styles.CheckboxWrapper}>
                <input type="checkbox" className={styles.CustomCheckbox} id="agree" required />
                <label htmlFor="agree" className={styles.CheckboxLabel}>
                  I agree to the terms and conditions
                </label>
              </div>

              <button type="submit" className={styles.SubmitBtn}>
                Send
                <img src={Photo.SandTG} alt="" />
              </button>
            </div>
          </form>
        </div>

      </section>

      <section className={styles.FaqSection}>
        <div className={styles.SectionHeader}>
          <h2 className={styles.SectionTitle}>
            <span className={styles.accentIcon}></span>
            Frequently asked questions
          </h2>
        </div>

        <div className={styles.FaqGrid}>
          {faq.map((item) => (
            <details key={item.question} className={styles.FaqCard}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

    </main>
  )
}
