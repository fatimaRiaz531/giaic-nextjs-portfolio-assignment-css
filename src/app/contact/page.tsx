import React from "react";
import styles from './ContactPage.module.css'; // Import the CSS module

const ContactPage = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles['contact-text']}>
                    <h2>Contact Me</h2>
                    <p>
                        Have a project in mind or just want to connect? I am always excited
                        to discuss new opportunities and collaborations. Drop me an email
                        at <a href="mailto:fatimariaz531@gmail.com" style={{ color: '#3b82f6' }}>fatimariaz531@gmail.com</a> or fill out the form below. I will
                        respond promptly to help you bring your vision to life!
                    </p>
                    <div className={styles['contact-list']}>
                        <li>
                            <i  />
                            <span>fatimariaz531@gmail.com</span>
                        </li>
                        <li>
                            <i  />
                            <span>012345678</span>
                            </li>
                    </div>
                    <div >
                        <a href="#" aria-label="Facebook">
                            <i  />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i />
                        </a>
                        <a href="https://www.linkedin.com/in/fatima-r-87a1472b5/" aria-label="LinkedIn">
                            <i />
                        </a>
                    </div>
                </div>
                <div >
                    <form > {/* Replace with form handling mechanism */}
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            required
                        /><br /><br />
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            required
                          
                        /><br /><br />
                        <input
                            type="text"
                            placeholder="Enter Your Subject"
                            required
                          
                        /><br /><br />
                        <textarea
                            placeholder="Enter Your Message"
                            required
                       
                        ></textarea><br /><br />
                        <input className="{style.submit}"
                            type="submit"
                            value="Submit"
                          
                        /><br /><br />
                    </form>
                </div>
            </div>
        </footer>
    );
};
export default ContactPage