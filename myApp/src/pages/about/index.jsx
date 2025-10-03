import PageWrapper from "../../components/PageWrapper";
import ProductHeader from "../../components/ProductHeader";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <PageWrapper className={styles.aboutPage}>
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroText}>
            <h1>About Our Company</h1>
            <p>
              We are a leading provider of high-quality products and services,
              committed to delivering exceptional value to our customers. With
              years of experience in the industry, we strive to innovate and
              exceed expectations in everything we do.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Team collaboration"
            />
          </div>
        </section>
        <section className={styles.missionSection}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide innovative solutions that empower our
            customers to achieve their goals. We believe in building lasting
            relationships through trust, quality, and outstanding service.
          </p>
        </section>
        <section className={styles.valuesSection}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.value}>
              <h3>Innovation</h3>
              <p>We constantly seek new ways to improve and evolve.</p>
            </div>
            <div className={styles.value}>
              <h3>Quality</h3>
              <p>
                We are committed to delivering the highest quality products.
              </p>
            </div>
            <div className={styles.value}>
              <h3>Integrity</h3>
              <p>We conduct business with honesty and transparency.</p>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default AboutPage;
