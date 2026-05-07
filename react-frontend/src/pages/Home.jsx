import React from 'react';

const Home = () => {
    return (
        <main>
            <section className="home" id="home">
                <div className="home-text">
                    <h4>#FITNESS</h4>
                    <h1>Transform Your Body <span>Achieve Your Goals</span></h1>
                    <p>Unleash your potential with personalized training, cutting-edge equipment, and a supportive
                        community. Start your journey today!</p>
                    <a href="https://wa.me/919820555607?text=Hello%20I%20am%20interested" className="btn hero-btn" target="_blank" rel="noopener noreferrer">JOIN NOW</a>
                </div>
            </section>

            <section className="core-values" id="values">
                <div className="main-text">
                    <h2>Our Core<strong>Values</strong></h2>
                    <p>We are dedicated to building a fitness community that champions commitment, personalized care, and
                        lasting results.</p>
                </div>

                <div className="value-content">
                    <div className="value-box">
                        <div className="value-img">
                            <img src="/value-trainer.jpg" alt="Personal trainer working with client" />
                        </div>
                        <div className="value-text">
                            <h3>Personalized Training Plans</h3>
                            <p>Every fitness journey is unique. Our certified trainers craft bespoke workout and nutrition
                                plans tailored to your specific body type, goals, and schedule.</p>
                            <ul>
                                <li><i className="fa-solid fa-check-circle"></i> Custom Meal Guides</li>
                                <li><i className="fa-solid fa-check-circle"></i> 1-on-1 Trainer Sessions</li>
                            </ul>
                        </div>

                    </div>

                    <div className="value-box image-first">
                        <div className="value-img">
                            <img src="/value-equipment.jpg" alt="Group fitness class smiling" />
                        </div>
                        <div className="value-text">
                            <h3>Community &amp; Support</h3>
                            <p>We believe in the power of a strong community. Our Fitness Fever is a place where you'll find
                                motivation, accountability, and friendships through group classes and events.</p>
                            <ul>
                                <li><i className="fa-solid fa-check-circle"></i> Supportive Member Network</li>
                                <li><i className="fa-solid fa-check-circle"></i> Diverse Group Classes (HIIT, Yoga)</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section className="review" id="reviews">
                <div className="main-text">
                    <h2>What Our Members Say</h2>
                    <p>Read inspiring testimonials from people who achieved their goals with Fitness Fever.</p>
                </div>

                <div className="review-content">
                    <div className="review-box">
                        <a href="https://maps.app.goo.gl/WysWdfAQ1rGiAYzB8" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-quote-left"></i>
                            <p>"I've been a member of this gym for last 5 months, and it has been a fantastic experience! The facility is spacious, clean and equipped with modern machines for all kinds of workouts.
The trainers are professional and approachable, always ready to assist or offer guidance ( specially my trainer Mr Jitender )
The atmosphere and crowd is Good
Overall, I highly recommend this gym to anyone looking for a well maintained and motivating fitness centre!"</p>
                            <div className="rating">
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                    className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                    className="fa-solid fa-star"></i>
                            </div>
                            <h3>— Rajani Gill</h3>
                        </a>
                    </div>

                    <div className="review-box">
                        <a href="https://maps.app.goo.gl/kpeP8GcTXQAxzYvp8" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-quote-left"></i>
                            <p>"The gym has a great atmosphere and all the equipment is well maintained. The trainers are supportive and always motivate members to push their limits. Cleanliness and hygiene are also well taken care of. It's a perfect place to stay fit."</p>
                            <div className="rating">
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                    className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                    className="fa-solid fa-star-half-alt"></i>
                            </div>
                            <h3>— Utkarsh Shinde</h3>
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Home;
