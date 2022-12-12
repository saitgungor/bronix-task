import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div>
      <div className={styles.inputContainer}>
        <input className={styles.textInput} placeholder="Name" />
        <input className={styles.textInput} placeholder="Email" />
        <input className={styles.messageInput} placeholder="Your message" />
      </div>
      <div className={styles.submitButton}> Send</div>
    </div>
  );
};
export default ContactForm;
