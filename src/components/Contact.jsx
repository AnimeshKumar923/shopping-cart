import { useState } from "react";
import styles from "./Contact.module.scss";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.content}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.name}>
          <label>
            Name:
            <br />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={styles.nameLabel}
            />
          </label>
        </div>
        <div className={styles.email}>
          <label>
            Email:
            <br />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={styles.emailLabel}
            />
          </label>
        </div>
        <div className={styles.message}>
          <label>
            Message:
            <br />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className={styles.messageLabel}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

// export default Contact;
