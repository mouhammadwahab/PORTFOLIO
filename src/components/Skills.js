import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    // Animation for skills progress bars
    const animateSkills = () => {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach((progressBar) => {
        const value = progressBar.getAttribute('aria-valuenow');
        progressBar.style.width = `${value}%`;
      });
    };

    // Trigger animation when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.disconnect();
        }
      });
    });

    const skillsContent = document.querySelector('.skills-animation');
    if (skillsContent) {
      observer.observe(skillsContent);
    }

    return () => {
      if (skillsContent) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="skills" className="skills section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          <b>Technical Skills:</b> C/C++, Java, JavaFX, HTML, CSS, JavaScript, React, Flutter, Dart, SQL, Bootstrap, EJS, PostgreSQL, Git, OOP, Data Structures & Algorithms, Problem Solving, Software Engineering Principles
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">C/C++ <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Java & JavaFX <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">HTML, CSS, Bootstrap <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">JavaScript & EJS <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">React <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Flutter & Dart <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">SQL & PostgreSQL <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">OOP, DSA, Problem Solving <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 