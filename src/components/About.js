import React from 'react';
import profileImg from '../assets/img/Profile1.jpg';

const About = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          I am Muhammad Wahab, a results-driven Software Engineer with a strong background in web and mobile app development. I am passionate about leveraging my technical skills and creativity to deliver innovative solutions. My experience includes developing robust applications, collaborating in team environments, and continuously learning new technologies to stay ahead in the field.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={profileImg} className="img-fluid" alt="Profile" />
          </div>
          <div className="col-lg-8 content">
            <h2>SOFTWARE ENGINEER</h2>
            <h2 style={{ fontSize: '1.2rem' }}>WEB &amp; MOBILE APP DEVELOPER</h2>
            <p className="fst-italic py-3">
              Motivated and detail-oriented, I excel at problem-solving and thrive in fast-paced environments. My goal is to contribute to impactful projects and grow as a professional in the tech industry.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 March 2004</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0316-2068007, 0339-9068007</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>ZAFAR Colony Street#2, Rahim Yar Khan</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Software Engineering (in progress)</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>m.wahab2082@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Beyond technical skills, Muhammad Wahab is known for his strong moral character, embodying the qualities of honesty, integrity, and ethical conduct in both professional and personal settings. His commitment to continuous learning keeps him updated with the latest technologies and trends in web and mobile development, allowing him to provide innovative solutions that meet modern industry standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 