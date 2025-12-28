import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer id="footer" className="footer position-relative">
        <div className="container">
          <div className="copyright text-center">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">MUHAMMAD WAHAB</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="credits">
            {/* Remove these comments if needed */}
            {/* Designed by <a href="#">MUHAMMAD WAHAB</a> */}
          </div>
        </div>
      </footer>

      {/* Scroll Top Button */}
      <button 
        id="scroll-top" 
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <BiArrowToTop />
      </button>
    </>
  );
};

export default Footer; 