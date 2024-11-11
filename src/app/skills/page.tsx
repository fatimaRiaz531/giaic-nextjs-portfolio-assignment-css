import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaRegKeyboard } from 'react-icons/fa';
import styles from './SkillsPage.module.css'; // Import the CSS module

const SkillsPage = () => {
    return (
        <section className={styles.section} id="Skills">
            <div className={styles.container}>
                <h1 className='skills'>
                    My <span style={{ color: '#6b46c1' }}>Skills</span>
                </h1>

                {/* Technical Skills Section */}
                <h2 className='skill'>Technical Skills</h2>
                <div className={styles.skillList}>
                    {[
                        { icon: <FaHtml5 className={styles.skillIcon} style={{ color: '#F65C28' }} />, skill: 'HTML', percentage: '90%', color: styles.orange },
                        { icon: <FaCss3Alt className={styles.skillIcon} style={{ color: '#1E90FF' }} />, skill: 'CSS', percentage: '85%', color: styles.blue },
                        { icon: <FaJs className={styles.skillIcon} style={{ color: '#F7DF1E' }} />, skill: 'JavaScript', percentage: '75%', color: styles.yellow },
                        { icon: <FaRegKeyboard className={styles.skillIcon} style={{ color: '#007ACC' }} />, skill: 'TypeScript', percentage: '80%', color: styles.blue },
                        { icon: <span className={styles.skillIcon} style={{ color: '#28A745' }}>🌐</span>, skill: 'Next.js', percentage: '50%', color: styles.green },
                        { icon: <span className={styles.skillIcon} style={{ color: '#38B2AC' }}>🌊</span>, skill: 'Tailwind CSS', percentage: '50%', color: styles.teal },
                    ].map(({ icon, skill, percentage, color }) => (
                        <div className={styles.skillItem} key={skill}>
                            {icon}
                            <div className={styles.skillDetails}>
                                <div className={styles.skillHeader}>
                                    <span>{skill}</span>
                                    <span>{percentage}</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <div className={color} style={{ width: percentage }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> 

                {/* Professional Skills Section */}
                <h2>Professional Skills</h2>
                <div className={styles.professionalSkills}>
                    {[
                        { skill: 'Creativity', percentage: '80%', pathClass: 'path-1' },
                        { skill: 'Communication', percentage: '65%', pathClass: 'path-2' },
                        { skill: 'Problem Solving', percentage: '55%', pathClass: 'path-3' },
                        { skill: 'Teamwork', percentage: '85%', pathClass: 'path-4' },
                    ].map(({ skill, percentage, pathClass }) => (
                        <div key={skill} className={styles.radialBar}>
                            <svg className='my-svg'>
                                <circle className={styles.progressBar} cx="100" cy="100" r="80" strokeWidth="10"></circle>
                                <circle className={`${styles.path} ${pathClass}`} cx="100" cy="100" r="80" strokeWidth="10"></circle>
                            </svg>
                            <div className={styles.percentage}>{percentage}</div>
                            <div className={styles.text}>{skill}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsPage;