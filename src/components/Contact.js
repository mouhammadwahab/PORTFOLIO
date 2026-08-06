import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import { profile } from '../data/profile';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    emailjs
      .sendForm('service_bxlu5vx', 'template_szrjjnc', form.current, 'DCKC8BFfX7t0gQ_jE')
      .then(() => {
        const autoReplyParams = {
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          subject: form.current.subject.value,
          date: new Date().toLocaleString(),
        };
        return emailjs.send(
          'service_bxlu5vx',
          'template_cv5jt4d',
          autoReplyParams,
          'DCKC8BFfX7t0gQ_jE'
        );
      })
      .then(() => {
        setLoading(false);
        setSuccessMessage('Your message has been sent. Thank you!');
        form.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        setErrorMessage(error.text || 'An error occurred. Please try again later.');
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s build something</h2>
          <p>
            Open to collaboration on mobile apps, full-stack products, and AI automation. Reach out and
            I&apos;ll get back to you.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="contact-item">
              <div className="icon">
                <BiMap />
              </div>
              <div>
                <h3>Location</h3>
                <p>{profile.location}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <BiPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>
                  {profile.phone}
                  <br />
                  {profile.phoneAlt}
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <BiEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <div className="form-row">
              <label htmlFor="name-field">
                Your Name
                <input type="text" name="user_name" id="name-field" required />
              </label>
              <label htmlFor="email-field">
                Your Email
                <input type="email" name="user_email" id="email-field" required />
              </label>
            </div>
            <label htmlFor="subject-field">
              Subject
              <input type="text" name="subject" id="subject-field" required />
            </label>
            <label htmlFor="message-field">
              Message
              <textarea name="message" id="message-field" rows="6" required />
            </label>
            <div
              className={`form-status ${errorMessage ? 'error' : ''} ${successMessage ? 'success' : ''}`}
            >
              {loading && 'Sending…'}
              {errorMessage}
              {successMessage}
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
