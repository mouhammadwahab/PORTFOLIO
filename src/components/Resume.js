import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Motivated Software Engineer with hands-on experience in C/C++, Java, JavaFX, web and mobile app development. Adept at problem-solving, teamwork, and delivering high-quality solutions. Seeking opportunities to contribute technical expertise and grow professionally.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>MUHAMMAD WAHAB</h4>
              <p><em>Results-driven Software Engineer with experience in C/C++, Java, JavaFX, web and mobile app development. Strong problem-solving skills and a passion for technology.</em></p>
              <ul>
                <li>ZAFAR Colony Street#2, Rahim Yar Khan</li>
                <li>0316-2068007, 0339-9068007</li>
                <li>m.wahab2082@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BS Software Engineering</h4>
              <h5>2022 - 2026 (In Progress)</h5>
              <p><em>COMSATS University Islamabad, Lahore Campus</em></p>
            </div>
            <div className="resume-item">
              <h4>Intermediate in Computer Science</h4>
              <h5>2020 - 2022</h5>
              <p><em>BISE Bahawalpur</em></p>
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior Mobile and Web Developer</h4>
              <h5>ZMDM IT Solutions | March 2025 – Present</h5>
              <ul>
                <li>Leading the development and deployment of scalable mobile and web applications using technologies such as Flutter, React, and Node.js.</li>
                <li>Collaborating with cross-functional teams to deliver high-performance, user-centric solutions for clients in various domains.</li>
                <li>Implementing CI/CD pipelines and optimizing app performance to improve user experience and reduce time-to-market.</li>
                <li>Integrating RESTful APIs and third-party services, enhancing the functionality and interoperability of client applications.</li>
              </ul>
            </div>

          

            <div className="resume-item">
              <h4>FLUTTER MOBILE APP DEVELOPER</h4>
              <h5>2024 - Present</h5>
              <p><em>FREELANCE AND PERSONAL PROJECTS</em></p>
              <ul>
                <li>Developed cross-platform mobile applications using Flutter and Dart.</li>
                <li>Created a food delivery mobile app that send orders on whatsapp.</li>
                <li>Built a smart solar app that offer solar services and deal with purchase of solar products.</li>
                <li>Implemented Firebase for backend services, authentication, and real-time databases.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 