import React from "react";
import styles from "./ContactForm.module.css";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4cf60f9e-542d-4b8d-99ee-4fb83d609f2e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
      <form onSubmit={onSubmit}>
        <div className={styles.inputBox}>
          <label>Full Name</label>
          <input
            type="text"
            className={styles.field}
            placeholder="Enter your name"
            name="name"
            required
          ></input>
        </div>
        <div className={styles.inputBox}>
          <label>Email Address</label>
          <input
            type="text"
            className={styles.field}
            placeholder="Enter your email"
            name="email"
            required
          ></input>
        </div>
        <div className={styles.inputBox}>
          <label>Your Message</label>
          <textarea
            name="message"
            className={styles.text}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </div>
      </form>
  );
};
