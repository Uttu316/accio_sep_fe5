import ProductHeader from "../../components/ProductHeader";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <ProductHeader />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroText}>
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Whether you have questions about our
              products, need support, or want to discuss partnership
              opportunities, our team is here to help.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Contact us"
            />
          </div>
        </section>
        <section className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <h2>Get In Touch</h2>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>
                123 Business Street
                <br />
                City, State 12345
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>info@company.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Business Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
          <div className={styles.contactForm}>
            <h2>Send us a Message</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
