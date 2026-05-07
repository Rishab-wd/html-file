import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main>
            <section className="about" id="about">
                {/* <img src="aboutusmain.png" alt="background" className="aboutback"> */}
                <div className="about-text">
                    <h1>About us</h1>
                    <p>Established in 2010, Fitness Fever has grown into a premier fitness destination. We focus on creating
                        an inclusive environment where beginners feel supported and experts find their challenge. Our
                        commitment goes beyond equipment—it's about empowering you to lead a healthier life.</p>

                    <h3 style={{ marginTop: '20px' }}>Our Core Philosophy</h3>
                    <p>We don't believe in quick fixes. Our approach is all about sustainable, real growth. We help you
                        set achievable milestones that build your confidence over time.</p>

                    <h3 style={{ marginTop: '20px' }}>Why Choose Us?</h3>
                    <ul>

                        <li><i className="fa-solid fa-star"></i> Certified &amp; experienced trainers</li>
                        <li><i className="fa-solid fa-star"></i> Supportive community and environment</li>
                    </ul>

                    <Link to="/contact" className="btn hero-btn" style={{ marginTop: '20px' }}>CONTACT US</Link>
                </div>
                <div className="about-img">
                    <img src="/about-image.jpg" alt="Fitness Fever interior with equipment" />
                </div>
            </section>
        </main>
    );
};

export default About;
