import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutPage.module.css'; // Import the CSS module

const AboutPage = () => {
  return (
    <section className={styles.about}>
      <div className={styles['about-text']}>
        <Link href="/about" className={styles['about']}>
          <h2>About <span style={{ color: '#3b82f6' }}>Me</span></h2>
        </Link>
        <h4>Web Developer</h4>
        <p>
          My name is Fatima, and I am a skilled web developer proficient in JavaScript,
          TypeScript, HTML, and CSS. I enjoy creating responsive and interactive web
          applications that enhance user experience. With a strong command of front-end
          technologies, I strive to build efficient and visually appealing websites that
          meet client needs and industry standards.
        </p>
        <a href="#" className={styles['btn-box']}>
          More About Me
        </a>
      </div>

      <div className={styles['about-img']}>
        <Image
          src="/girl-with-coffee.jpg"
          alt="Web Design Technology"
          width={500} // Adjust width as per your image size
          height={300} // Adjust height as per your image size
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutPage;