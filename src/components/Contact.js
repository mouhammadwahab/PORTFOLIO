import React, { useState, useRef } from 'react';
import { BiMap, BiPhone, BiEnvelope } from 'react-icons/bi';
import emailjs from '@emailjs/browser';

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

    // IMPORTANT: Replace these values with your actual EmailJS credentials
    // 1. Go to https://www.emailjs.com/ and create an account
    // 2. Add a new Email Service (like Gmail, Outlook, etc.)
    // 3. Create an Email Template with variables: {{user_name}}, {{user_email}}, {{subject}}, {{message}}
    // 4. Get your Service ID, Template ID, and Public Key from your EmailJS dashboard
    emailjs.sendForm(
      'service_bxlu5vx', // Replace with your EmailJS service ID
      'template_szrjjnc', // Replace with your EmailJS template ID
      form.current,
      'DCKC8BFfX7t0gQ_jE' // Replace with your EmailJS public key
    )
      .then(() => {
        // First email sent successfully
        // Now send the auto-reply
        const autoReplyParams = {
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          subject: form.current.subject.value,
          date: new Date().toLocaleString()
        };
        
        return emailjs.send(
          'service_bxlu5vx', // Use the same service ID
          'template_cv5jt4d', // Replace with your auto-reply template ID
          autoReplyParams,
          'DCKC8BFfX7t0gQ_jE' // Use the same public key
        );
      })
      .then(() => {
        // Both emails sent successfully
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
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Feel free to reach out to discuss opportunities for collaboration, whether for web development, mobile app projects, or any software engineering needs. I'm always open to new challenges and excited to bring creative solutions to your technical requirements.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <BiMap className="flex-shrink-0" style={{ marginRight: '5px' }} />
                <div>
                  <h3>Address</h3>
                  <p>ZAFAR Colony Street#2, Rahim Yar Khan, Pakistan</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <BiPhone className="flex-shrink-0" style={{ marginRight: '5px' }} />
                <div>
                  <h3>Call Me</h3>
                  <p>0316-2068007, 0339-9068007</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <BiEnvelope className="flex-shrink-0" style={{ marginRight: '5px' }} />
                <div>
                  <h3>Email Me</h3>
                  <p>m.wahab2082@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form ref={form} onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="user_name" id="name-field" className="form-control" required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="user_email" id="email-field" required />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" required />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {loading && <div className="loading d-block">Loading</div>}
                  {errorMessage && <div className="error-message d-block">{errorMessage}</div>}
                  {successMessage && <div className="sent-message d-block">{successMessage}</div>}

                  <button type="submit" disabled={loading}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 