import React from 'react';

const Services = () => {
    return (
        <main>
            <section className="spacer"></section>

            <section className="services" id="services">
                <div className="main-text">
                    <h2>Our <strong>Services</strong></h2>
                    <p>From advanced cardio to calming yoga, we offer everything you need under one roof, guided by expert
                        trainers.</p>
                </div>

                <div className="service-content">
                    <div className="box">
                        <i className="fa-solid fa-dumbbell"></i>
                        <h3>Weight Training</h3>
                        <p>
                            Structured weight training using premium free weights and machines to
                            build strength, muscle, and overall performance. Programs are tailored
                            to your experience level and fitness goals.
                        </p>
                    </div>

                    <div className="box">
                        <i className="fa-solid fa-bicycle"></i>
                        <h3>Cardio Zone</h3>
                        <p>
                            Modern cardio equipment designed to improve endurance, support fat loss,
                            and enhance cardiovascular health through consistent, goal-focused
                            training.
                        </p>
                    </div>

                    <div className="box">
                        <i className="fa-solid fa-heartbeat"></i>
                        <h3>Nutrition Coaching</h3>
                        <p>
                            Expert-led, personalized nutrition coaching designed to support fat loss,
                            lean muscle growth, strength, and overall health. Each plan is science-backed,
                            lifestyle-friendly, and aligned with your training to deliver sustainable,
                            real-world results.
                        </p>
                    </div>

                    <div className="box">
                        <i className="fa-solid fa-child-reaching"></i>
                        <h3>Group Classes</h3>
                        <p>
                            Coach-led group workouts including HIIT, Zumba, and functional training
                            designed to boost energy, improve conditioning, and keep motivation high
                            through structured sessions.
                        </p>
                    </div>

                    <div className="box">
                        <i className="fa-solid fa-user-tie"></i>
                        <h3>Personal Training</h3>
                        <p>
                            One-on-one training with an experienced coach focused on proper technique,
                            goal-driven programming, and consistent progress through personalized
                            guidance.
                        </p>
                    </div>

                    <div className="box">
                        <i className="fa-solid fa-spa"></i>
                        <h3>Wellness &amp; Recovery</h3>
                        <p>
                            Dedicated recovery spaces including stretching zones and wellness tools
                            to support muscle recovery, reduce fatigue, and maintain long-term
                            performance.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Services;
