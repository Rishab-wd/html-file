import React, { useState } from 'react';

const BASE = '/testimony';

const testimonials = [
    {
        id: 1,
        name: 'Rajan Gill',
        rating: 5,
        halfStar: false,
        beforeImg: `${BASE}/before/1b.png`,
        afterImg:  `${BASE}/after/1a.png`,
        text: "I've been a member of this gym for last 5 months, and it has been a fantastic experience! The facility is spacious, clean and equipped with modern machines for all kinds of workouts. The trainers are professional and approachable, always ready to assist or offer guidance (specially my trainer Mr Jitender). The atmosphere and crowd is good. Overall, I highly recommend this gym to anyone looking for a well maintained and motivating fitness centre!",
        goal: 'Weight Loss',
        duration: '5 Months',
        link: 'https://maps.app.goo.gl/WysWdfAQ1rGiAYzB8',
        icon: 'fa-solid fa-person-walking',
    },
    {
        id: 2,
        name: 'Utkarsh Shinde',
        rating: 4,
        halfStar: true,
        beforeImg: `${BASE}/before/2b.jpeg`,
        afterImg:  `${BASE}/after/2a.png`,
        text: "The gym has a great atmosphere and all the equipment is well maintained. The trainers are supportive and always motivate members to push their limits. Cleanliness and hygiene are also well taken care of. It's a perfect place to stay fit.",
        goal: 'Muscle Building',
        duration: '3 Months',
        link: 'https://maps.app.goo.gl/kpeP8GcTXQAxzYvp8',
        icon: 'fa-solid fa-dumbbell',
    },
    {
        id: 3,
        name: 'Priya Mehta',
        rating: 5,
        halfStar: false,
        beforeImg: `${BASE}/before/3b.jpeg`,
        afterImg:  `${BASE}/after/3a.jpeg`,
        text: "Joining Fitness Fever was the best decision I made this year. The group classes are energetic and the trainers genuinely care about your progress. I've lost 8 kg in 4 months and feel stronger than ever. The community here keeps you accountable!",
        goal: 'Fat Loss',
        duration: '4 Months',
        link: '#',
        icon: 'fa-solid fa-fire',
    },
    {
        id: 4,
        name: 'Rohit Desai',
        rating: 5,
        halfStar: false,
        beforeImg: `${BASE}/before/4b.jpeg`,
        afterImg:  `${BASE}/after/4a.jpeg`,
        text: "Excellent trainers who tailor plans to your specific needs. The nutrition coaching I received alongside my training completely changed how I eat. Clean facility, great equipment, and a motivating environment — highly recommended for serious fitness enthusiasts.",
        goal: 'Strength & Conditioning',
        duration: '6 Months',
        link: '#',
        icon: 'fa-solid fa-bolt',
    },
    {
        id: 5,
        name: 'Sneha Kapoor',
        rating: 5,
        halfStar: false,
        beforeImg: `${BASE}/before/5b.jpeg`,
        afterImg:  `${BASE}/after/5a.jpeg`,
        text: "As someone who was nervous about starting at a gym, the team at Fitness Fever made me feel welcome from day one. My trainer designed a beginner-friendly program and I've been making steady progress. The positive energy here is unmatched!",
        goal: 'Overall Fitness',
        duration: '2 Months',
        link: '#',
        icon: 'fa-solid fa-seedling',
    },
];

const stats = [
    { value: '500+', label: 'Happy Members',      icon: 'fa-solid fa-users'  },
    { value: '4.8★', label: 'Average Rating',     icon: 'fa-solid fa-star'   },
    { value: '98%',  label: 'Would Recommend',    icon: 'fa-solid fa-heart'  },
    { value: '5+',   label: 'Years of Excellence', icon: 'fa-solid fa-medal'  },
];

const StarRating = ({ rating, halfStar }) => {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map(i => {
                if (i <= rating)
                    return <i key={i} className="fa-solid fa-star"></i>;

                if (i === rating + 1 && halfStar)
                    return (
                        <i
                            key={i}
                            className="fa-solid fa-star-half-alt"
                        ></i>
                    );

                return <i key={i} className="fa-regular fa-star"></i>;
            })}
        </div>
    );
};

const Testimony = () => {
    const [expanded, setExpanded] = useState(null);

    return (
        <main className="testimony-page">
            <section className="spacer"></section>

            {/* Hero */}
            <section className="testimony-hero">
                <div className="testimony-hero-overlay"></div>

                <div className="testimony-hero-content">
                    <span className="blog-tag-label">
                        REAL STORIES
                    </span>

                    <h1>
                        Member <span>Testimonials</span>
                    </h1>

                    <p>
                        Hear from the people who transformed
                        their lives at Fitness Fever.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="testimony-stats-section">
                <div className="testimony-stats-grid">
                    {stats.map((s, i) => (
                        <div
                            className="testimony-stat"
                            key={i}
                        >
                            <i className={s.icon}></i>

                            <span className="stat-value">
                                {s.value}
                            </span>

                            <span className="stat-label">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimony-grid-section">
                <div className="main-text">
                    <h2>
                        What Our Members <strong>Say</strong>
                    </h2>

                    <p>
                        Authentic reviews from our community.
                    </p>
                </div>

                <div className="testimony-grid">
                    {testimonials.map(t => {
                        const isExpanded = expanded === t.id;

                        const longText =
                            t.text.length > 160;

                        return (
                            <div
                                className="testimony-card"
                                key={t.id}
                            >
                                <i className="fa-solid fa-quote-left testimony-quote-icon"></i>

                                {/* Top */}
                                <div className="testimony-card-top">
                                    <div className="testimony-avatar">
                                        <i className={t.icon}></i>
                                    </div>

                                    <div className="testimony-meta">
                                        <h3>{t.name}</h3>

                                        <div className="testimony-badges">
                                            <span className="badge-goal">
                                                <i className="fa-solid fa-bullseye"></i>
                                                {t.goal}
                                            </span>

                                            <span className="badge-duration">
                                                <i className="fa-regular fa-calendar-check"></i>
                                                {t.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}
                                <StarRating
                                    rating={t.rating}
                                    halfStar={t.halfStar}
                                />

                                {/* Images */}
                                {(t.beforeImg ||
                                    t.afterImg) && (
                                    <div className="transformation-images">
                                        {t.beforeImg && (
                                            <div className="transform-box">
                                                <img
                                                    src={
                                                        t.beforeImg
                                                    }
                                                    alt={`${t.name} before transformation`}
                                                />
                                                <span>
                                                    Before
                                                </span>
                                            </div>
                                        )}

                                        {t.afterImg && (
                                            <div className="transform-box">
                                                <img
                                                    src={
                                                        t.afterImg
                                                    }
                                                    alt={`${t.name} after transformation`}
                                                />
                                                <span>
                                                    After
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Text */}
                                <p
                                    className={`testimony-text ${
                                        !isExpanded &&
                                        longText
                                            ? 'clamped'
                                            : ''
                                    }`}
                                >
                                    "{t.text}"
                                </p>

                                {/* Read More */}
                                {longText && (
                                    <button
                                        className="read-more-btn"
                                        onClick={() =>
                                            setExpanded(
                                                isExpanded
                                                    ? null
                                                    : t.id
                                            )
                                        }
                                    >
                                        {isExpanded
                                            ? 'Show less ▲'
                                            : 'Read more ▼'}
                                    </button>
                                )}

                                {/* Link */}
                                {t.link !== '#' && (
                                    <a
                                        href={t.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="testimony-google-link"
                                    >
                                        <i className="fa-brands fa-google"></i>
                                        View on Google
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Testimony;