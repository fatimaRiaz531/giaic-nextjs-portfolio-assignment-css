import React from 'react';
import './Footer.css'; // Import the custom CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-section">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-description">
            Have a project in mind or just want to connect? I am always excited
            to discuss new opportunities and collaborations. Drop me an email
            at <a href="mailto:fatimariaz531@gmail.com" className="email-link">fatimariaz531@gmail.com</a>.
          </p>
          <div className="{style.info}">
          <p>Developed with best efforts by Fatima &copy; 2024</p>
        </div>
        </div>
        
      </div>
      <a
        href="#"
        className="scroll-to-top"
      >
        <i className="bx bx-up-arrow-alt" /> {/* Up arrow icon */}
      </a>
    </footer>
  );
};

export default Footer;