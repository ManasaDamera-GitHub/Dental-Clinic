// src/components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "../styles/main.css"; // Import the external CSS

const faqs = [
  {
    question: "What services does Todays Dental offer?",
    answer:
      "We offer general dentistry, cosmetic treatments, orthodontics, and emergency care using advanced technology.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our website or by calling us directly at (555) 123-4567.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Our staff will help verify your benefits and maximize your insurance coverage. We also offer flexible payment options for uninsured patients.",
  },
  {
    question: "Is emergency care available?",
    answer:
      "Yes, we offer 24/7 emergency dental services for urgent care needs.",
  },
  {
    question: " How often should I visit the dentist?",
    answer:
      "We recommend visiting the dentist every 6 months for regular check-ups and cleanings. However, some patients may need more frequent visits based on their oral health needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know before visiting Todays Dental.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card">
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <ChevronDown
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                />
              </button>
              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
