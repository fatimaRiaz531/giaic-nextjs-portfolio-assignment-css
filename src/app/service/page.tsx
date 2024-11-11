import { FaCss3Alt, FaHtml5, FaJs, FaRegKeyboard } from 'react-icons/fa';
import styles from './ServicesPage.module.css'; // Import the CSS module

const ServicesPage = () => {
    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                <h1 className='heading'>
                    <span style={{ color: '#6b46c1' }}>My</span> Services
                </h1>
                <div className={styles.grid}>
                    <div className={styles['service-card']}>
                        <FaRegKeyboard className={styles.icon} />
                        <h2>TypeScript Expert</h2>
                        <p>
                            I am a TypeScript expert proficient in harnessing its static typing
                            and modern JavaScript features to build scalable and maintainable
                            applications. My expertise ensures robust error detection, improved
                            code quality, and seamless integration across diverse development environments.
                        </p>
                        <a href="#" className={styles['service-link']}>Learn More</a>
                    </div>

                    <div className={styles['service-card']}>
                        <FaJs className={styles.icon} />
                        <h2 className='expert'>JavaScript Expert</h2>
                        <p>
                            As a JavaScript expert, I specialize in building dynamic and interactive
                            web applications. With in-depth knowledge of JavaScript frameworks like
                            React and Node.js, I deliver efficient solutions that optimize performance
                            and enhance user experiences across platforms.      and enhance user experiences across platforms.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>

                    <div className={styles['service-card']}>
                        <FaHtml5 className="text-4xl text-teal-500 mb-4" />
                        <h2 className="text-xl font-semibold mb-2">HTML Expert</h2>
                        <p className="paragraph">
                            I have expertise in CSS and Figma, allowing me to create visually
                            appealing and user-friendly web applications. My CSS skills ensure
                            precise, responsive designs, while Figma enables me to prototype
                            and iterate on user interfaces effectively. This combination
                            ensures seamless and intuitive user experiences.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>

                    <div className={styles['service-card']}>
                        <FaCss3Alt className="text-4xl text-teal-500 mb-4" />
                        <h2 className="text-xl font-semibold mb-2">CSS Expert</h2>
                        <p className="text-gray-600 mb-4">
                            As a CSS expert, I excel in creating visually stunning and responsive
                            designs. With a strong grasp of layout techniques, animations, and
                            preprocessors like Sass, I ensure consistency and elegance in user
                            interfaces, enhancing usability and brand identity.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;