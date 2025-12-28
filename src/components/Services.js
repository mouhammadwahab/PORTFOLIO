import React from 'react';
import { 
  BiCode, 
  BiCodeCurly, 
  BiFileBlank, 
  BiWindow, 
  BiLayout, 
  BiData, 
  BiGlobe,
  BiMobile,
  BiDevices
} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>I offer a comprehensive range of services in software and web development, specializing in languages such as C/C++, Java, and JavaFX for robust application development. My expertise extends to front-end technologies like HTML, CSS, and JavaScript, as well as EJS, SQL, and Bootstrap for creating dynamic and responsive web applications. Additionally, I provide Flutter-based mobile app development services for cross-platform solutions that deliver native performance. Whether you need a high-performance software solution, a modern interactive website, or a cutting-edge mobile application, I have the skills and experience to deliver exceptional results across multiple platforms.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
         
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="800">
            <div className="icon flex-shrink-0"><BiMobile /></div>
            <div>
              <h4 className="title">Flutter Mobile App Development</h4>
              <p className="description">Building cross-platform mobile applications with Flutter and Dart for iOS and Android.</p>
            </div>
          </div>

       

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="icon flex-shrink-0"><BiWindow /></div>
            <div>
              <h4 className="title">Front-end Development</h4>
              <p className="description">Designing responsive and interactive user interfaces with HTML, CSS, and JavaScript.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className="icon flex-shrink-0"><BiLayout /></div>
            <div>
              <h4 className="title">EJS Templating</h4>
              <p className="description">Creating dynamic web pages with Embedded JavaScript (EJS).</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div className="icon flex-shrink-0"><BiData /></div>
            <div>
              <h4 className="title">Database Management</h4>
              <p className="description">Designing and managing efficient SQL, Firebase, and MongoDB databases for your applications.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="900">
            <div className="icon flex-shrink-0"><BiDevices /></div>
            <div>
              <h4 className="title">Responsive UI Design</h4>
              <p className="description">Creating beautiful, responsive user interfaces for both web and mobile applications.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="700">
            <div className="icon flex-shrink-0"><BiGlobe /></div>
            <div>
              <h4 className="title">Web Development</h4>
              <p className="description">Building modern, responsive, and interactive websites using the latest web technologies and frameworks.</p>
            </div>
          </div>

             <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><BiCodeCurly /></div>
            <div>
              <h4 className="title">Java Development</h4>
              <p className="description">Building robust, scalable, and secure applications with Java.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><BiFileBlank /></div>
            <div>
              <h4 className="title">JavaFX Applications</h4>
              <p className="description">Creating rich client applications with JavaFX.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><BiCode /></div>
            <div>
              <h4 className="title">C/C++ Development</h4>
              <p className="description">Developing high-performance applications and system software using C and C++.</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Services; 