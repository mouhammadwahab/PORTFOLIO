import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import { profile } from '../data/profile';
import SectionAura from './SectionAura';
import { easeOut, staggerContainer, staggerItem } from '../motion';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_AUTOREPLY_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

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

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_AUTOREPLY_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setLoading(false);
      setErrorMessage('Contact form is not configured. Please try email instead.');
      return;
    }

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        const autoReplyParams = {
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          subject: form.current.subject.value,
          date: new Date().toLocaleString(),
        };
        return emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE_ID,
          autoReplyParams,
          EMAILJS_PUBLIC_KEY
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
      <SectionAura />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
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
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="contact-item" variants={staggerItem} whileHover={{ y: -3 }}>
              <div className="icon">
                <BiMap />
              </div>
              <div>
                <h3>Location</h3>
                <p>{profile.location}</p>
              </div>
            </motion.div>
            <motion.div className="contact-item" variants={staggerItem} whileHover={{ y: -3 }}>
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
            </motion.div>
            <motion.div className="contact-item" variants={staggerItem} whileHover={{ y: -3 }}>
              <div className="icon">
                <BiEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.08 }}
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
            <motion.button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
