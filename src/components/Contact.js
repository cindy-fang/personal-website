import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from '@emailjs/browser';
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ success: false, message: '' });
    const formRef = useRef(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
  
      emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current, // Pass the form reference
          publicKey
      ).then(() => {
          setIsLoading(false);
          setStatus({ success: true, message: 'Message sent successfully' });
          setForm({ name: '', email: '', message: '' });
      }).catch((error) => {
          setIsLoading(false);
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
          console.error("Error:", error);
      });
  };  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch 💌</h2>
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="name"
                          placeholder="First Name"
                          value={form.name}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"
                          value={form.message}
                          onChange={handleChange}
                        ></textarea>
                        <button type="submit" disabled={isLoading}>
                          <span>{isLoading ? 'Sending...' : 'Send'}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

