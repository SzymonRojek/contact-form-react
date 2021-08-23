import { useState, useEffect } from "react";

import "./styles.css";

import { Header, Form, Message } from "./components";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const setIntervalId = setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);

    return () => clearInterval(setIntervalId);
  });

  return (
    <div className="container">
      <Header />
      <Form setIsSubmitted={setIsSubmitted} />
      <Message isSubmitted={isSubmitted} />
    </div>
  );
};

export default ContactForm;
