import React from 'react';
import './home.css';
import Navbar from './navbar';
//import flower from './images.jpg';
import dev from './dev.jpg';
import p1 from './hg.jpg';
import p2 from './ele.jpg';
import p3 from './me.jpg';
import twitterIcon from './twitter.png'; // Add appropriate path
import linkedinIcon from './linkedin.png'; // Add appropriate path
import githubIcon from './github2.png'; // Add appropriate path
import facebookIcon from './insta.png'; // Add appropriate path

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home-container">
                {/* Home Section */}
                <section id="home" className="section home-section">
                    <div className="home-content">
                        <div className="image-container">
                            <img src={dev} alt="Your Name" />
                        </div>
                        <div className="text-container">
                            <h1 id='name'>PREETHI G</h1>
                            <p>ELECTRICAL ENGINEER</p>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="section about-section">
                    <h2>ABOUT ME</h2>
                    <p id='aboutme'>
                        Hello, my name is Preethi G, and I am from Coimbatore. I am currently in my final year of pursuing a Bachelor of Engineering in Electrical and Electronics Engineering at Sri Krishna College of Engineering and Technology (SKCET) in Coimbatore.

                        I am actively looking for internship opportunities as a Software Development Engineer (SDE) to apply and enhance my technical skills. Throughout my academic journey, I have developed proficiency in a range of programming languages and technologies, including Java, C++, C, React.js, Node.js, HTML, CSS, JavaScript, MySQL, and Spring Boot.

                        My practical experience includes developing full-stack web applications. Notably, I have worked on a home gardening application and an e-commerce project, which have given me hands-on experience in both front-end and back-end development.

                        I am passionate about leveraging my skills to build innovative and efficient solutions, and I am eager to contribute to dynamic and growth-oriented projects during my internship.
                    </p>
                </section>

                {/* Skills Section */}
                <section id="skills" className="section skills-section">
                    <h2>SKILLS</h2>
                    <div className="skills-container">
                        <div className="skill-card">
                            <h3>Programming Languages</h3>
                            <ul>
                                <li>JAVA</li>
                                <li>C++</li>
                                <li>C</li>
                                
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Web Technologies</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>REACT JS</li>
                                <li>NODE JS</li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Databases & Frameworks</h3>
                            <ul>
                                <li>MYSQL</li>
                               
                                <li>SPRING BOOT</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="section projects-section">
                    <h2>PROJECTS</h2>
                    <div className="projects-container">
                        <div className="card">
                            <img src={p1} alt="Project 1" />
                            <div className="card-content">
                                <h3>Home Gardening Application</h3>
                                <p>Full Stack Project</p>
                                <p className='des'>Developed a comprehensive Home Gardening
                                Application using React JS for the front end, Spring
                                Boot for the backend, and MySQL for the database. The
                                project aims to provide a convenient platform for users
                                to book home gardening services while promoting
                                environmental sustainability through the cultivation of
                                trees and plants.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={p2} alt="Project 2" />
                            <div className="card-content">
                                <h3>Smart Animal Detection and Alerting System</h3>
                                <p className='des'>Developed a Smart Animal Detection & Alarm System using YOLO for precise animal identification and buzzers for immediate alerting, with a focus on mitigating human-wildlife conflicts in rural areas. The system employs real-time image processing to detect animals, specifically elephants, and triggers strategically placed buzzers throughout the village to warn residents promptly. The project is a commitment to addressing real-world challenges, contributing to community well-being by providing an innovative solution to enhance human-animal coexistence.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={p3} alt="Project 3" />
                            <div className="card-content">
                                <h3>E-Commerce Web for Engineering Products</h3>
                                <p className='des'>E-Commerce website Designed and implemented a
                                robust E-commerce Platform utilizing React for the
                                frontend and Spring Boot for the backend. This
                                dynamic system caters to the diverse requirements of
                                businesses across sectors such as mechanical, building
                                construction, electrical, electronics, food
                                manufacturing, and agriculture. The platform boasts
                                an intuitive user interface, empowering customers to
                                effortlessly explore and navigate an extensive catalog
                                of engineering products.</p>
                               
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="section contact-section">
                    <h2>CONTACT ME</h2>
                    <p>Connect with me on social media:</p>
                    <div className="social-icons">
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={twitterIcon} alt="Twitter" />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                    </div>
                </section>
            </div>
            <footer className="home-footer">
          <p>&copy; preethiofficialpage</p>
          <p>Privacy Policy | Terms of Service</p>
        </footer>
        </div>
    );
};

export default Home;
