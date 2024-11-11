// Header.jsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Import the CSS module

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>FR.</Link>

      {/* Hamburger Button for Mobile */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <Link
              href="/"
              className={`${styles.navLink} ${isMenuOpen ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/service"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
            
              Service
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;