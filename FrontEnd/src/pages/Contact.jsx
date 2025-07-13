import React, { useState } from "react";
import axios from "axios";
// import "./Contact.css";
import "../styles/main.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          We’re here to help. Fill out the form or reach us using the details
          below.
        </p>

        <div className="contact-grid">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              required
              onChange={handleChange}
              style={{ color: "Black" }}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              required
              onChange={handleChange}
              style={{ color: "Black" }}
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              required
              onChange={handleChange}
              style={{ color: "Black" }}
            />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              required
              onChange={handleChange}
              style={{ color: "Black" }}
            ></textarea>
            <button type="submit">Send Message</button>
            {submitted && (
              <p className="success-msg">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>

          <div className="contact-details">
            <p>
              <strong>📍 Address:</strong> 123 Smile Street, HappyTown, India
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 9876543210
            </p>
            <p>
              <strong>✉️ Email:</strong> contact@todaysdental.com
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "12px", marginTop: "20px" }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
