import React from 'react';
import { BiCode, BiMobile, BiGlobe } from 'react-icons/bi';
import swiftImg from '../assets/img/LOGO.png';
import worEatsImg from '../assets/img/wor-eats.jpg';
import smartSolarImg from '../assets/img/smart-solar.png';
import eyeDocImg from '../assets/img/eye-doc.jpg';
import fastFoodiesImg from '../assets/img/fast-foodies.jpg';
import muslimDatingImg from '../assets/img/muslim-dating.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>My portfolio showcases a diverse range of projects including web and mobile applications. I've developed a comprehensive food website, a dynamic social media platform, and a robust web-based store management system. Additionally, my Flutter mobile app portfolio includes e-commerce solutions, fitness tracking applications, and cross-platform utilities that demonstrate my versatility in both web and mobile development.</p>
      </div>

      <div className="container">
        <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
           {/* SWIFT Drive - Car Rental Application */}
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap" style={{ textAlign: 'center', padding: '20px' }}>
              <img src={swiftImg} className="img-fluid" alt="SWIFT Drive" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '50%', marginBottom: '20px' }} />
             
              <h4 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#000' }}>SWIFT Drive - Car Rental Application</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>A car rental application developed with Flutter, offering users the ability to browse, book, and manage car rentals easily.</p>
              <div className="portfolio-links">
                <BiMobile className="tech-icon" style={{ fontSize: '1.5rem' }} />
              </div>
            </div>
          </div>

          {/* WOR EATS - Food Website */}
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap" style={{ textAlign: 'center', padding: '20px' }}>
              <img src={worEatsImg} className="img-fluid" alt="WOR EATS" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '50%', marginBottom: '20px' }} />
              <h4 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#000' }}>WOR EATS</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>Food website built with Bootstrap, HTML, CSS, JavaScript, and PostgreSQL</p>
              <div className="portfolio-links">
                <BiGlobe className="tech-icon" style={{ fontSize: '1.5rem' }} />
              </div>
            </div>
          </div>

          {/* Smart Solar - Mobile App */}
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap" style={{ textAlign: 'center', padding: '20px' }}>
              <img src={smartSolarImg} className="img-fluid" alt="Smart Solar" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '50%', marginBottom: '20px' }} />
              <h4 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#000' }}>Smart Solar</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>Flutter-based mobile app for solar product purchases and service bookings</p>
              <div className="portfolio-links">
                <BiMobile className="tech-icon" style={{ fontSize: '1.5rem' }} />
              </div>
            </div>
          </div>

          {/* EyeDoc - Mobile App */}
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap" style={{ textAlign: 'center', padding: '20px' }}>
              <img src={eyeDocImg} className="img-fluid" alt="EyeDoc" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '50%', marginBottom: '20px' }} />
              <h4 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#000' }}>EyeDoc</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>Flutter app for eye condition analysis through image processing</p>
              <div className="portfolio-links">
                <BiMobile className="tech-icon" style={{ fontSize: '1.5rem' }} />
              </div>
            </div>
          </div>

          {/* Fast Foodies - Mobile App */}
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap" style={{ textAlign: 'center', padding: '20px' }}>
              <img src={fastFoodiesImg} className="img-fluid" alt="Fast Foodies" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '50%', marginBottom: '20px' }} />
              <h4 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#000' }}>Fast Foodies</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>Flutter-based food delivery app for restaurant orders</p>
              <div className="portfolio-links">
                <BiMobile className="tech-icon" style={{ fontSize: '1.5rem' }} />
              </div>
            </div>
          </div>

          {/* MuslimDatingApp - Mobile App */}
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap" style={{ textAlign: 'center', padding: '20px' }}>
              <img src={muslimDatingImg} className="img-fluid" alt="Muslim Dating App" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '50%', marginBottom: '20px' }} />
              <h4 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#000' }}>MuslimDatingApp</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>Flutter-based dating app specifically designed for Muslim users</p>
              <div className="portfolio-links">
                <BiMobile className="tech-icon" style={{ fontSize: '1.5rem' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 