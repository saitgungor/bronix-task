import styles from "./ContactUs.module.css";
import contactUsImg from "../../Assets/images/contact-us.png";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Contact Us </h3>
        <img className={styles.image} src={contactUsImg} alt="contact-us" />
      </div>
      <ContactForm />
    </div>
  );
};
export default ContactUs;
