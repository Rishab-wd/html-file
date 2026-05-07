import React, { useState } from 'react';

const blogPosts = [
    {
        id: 1,
        category: 'Nutrition',
        date: 'April 28, 2026',
        title: '5 High-Protein Meals to Fuel Your Gains',
        excerpt: 'Discover easy, affordable high-protein recipes crafted by our in-house nutritionist to accelerate muscle recovery and growth after intense sessions.',
        author: 'Jitender Singh',
        authorRole: 'Head Trainer',
        readTime: '4 min read',
        icon: 'fa-solid fa-utensils',
    },
    {
        id: 2,
        category: 'Training',
        date: 'April 20, 2026',
        title: 'The Science Behind Progressive Overload',
        excerpt: 'Learn why progressive overload is the single most important principle in strength training and how to apply it systematically for continuous gains.',
        author: 'Fitness Fever Team',
        authorRole: 'Expert Panel',
        readTime: '6 min read',
        icon: 'fa-solid fa-dumbbell',
    },
    {
        id: 3,
        category: 'Mindset',
        date: 'April 14, 2026',
        title: 'Building a Consistent Gym Habit That Lasts',
        excerpt: 'Consistency beats intensity every time. We break down the psychology of habit formation and practical strategies to keep you showing up week after week.',
        author: 'Fitness Fever Team',
        authorRole: 'Wellness Coach',
        readTime: '5 min read',
        icon: 'fa-solid fa-brain',
    },
    {
        id: 4,
        category: 'Recovery',
        date: 'April 7, 2026',
        title: 'Why Sleep Is Your Most Powerful Recovery Tool',
        excerpt: 'Your muscles don\'t grow in the gym — they grow while you sleep. Discover how optimizing your rest can dramatically improve performance and body composition.',
        author: 'Jitender Singh',
        authorRole: 'Head Trainer',
        readTime: '4 min read',
        icon: 'fa-solid fa-moon',
    },
    {
        id: 5,
        category: 'Training',
        date: 'March 30, 2026',
        title: 'HIIT vs Steady-State Cardio: Which Burns More Fat?',
        excerpt: 'Both have their place in a smart training plan, but knowing when to use each can make all the difference. We break down the science so you can decide.',
        author: 'Fitness Fever Team',
        authorRole: 'Expert Panel',
        readTime: '5 min read',
        icon: 'fa-solid fa-fire-flame-curved',
    },
    {
        id: 6,
        category: 'Nutrition',
        date: 'March 22, 2026',
        title: 'Pre-Workout Nutrition: What to Eat and When',
        excerpt: 'Timing and food choice before training can make or break your session. Our nutritionist outlines the ideal pre-workout strategy for energy and performance.',
        author: 'Fitness Fever Team',
        authorRole: 'Nutritionist',
        readTime: '4 min read',
        icon: 'fa-solid fa-apple-whole',
    },
];

const categories = ['All', 'Training', 'Nutrition', 'Mindset', 'Recovery'];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(p => p.category === activeCategory);

    return (
        <main className="blog-page">
            <section className="spacer"></section>

            {/* Hero */}
            <section className="blog-hero">
                <div className="blog-hero-overlay"></div>
                <div className="blog-hero-content">
                    <span className="blog-tag-label">OUR BLOG</span>
                    <h1>Fitness <span>Insights</span> & Tips</h1>
                    <p>Expert advice on training, nutrition, recovery, and the mindset needed to crush your goals.</p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="blog-filter-section">
                <div className="blog-filter-bar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Posts Grid */}
            <section className="blog-grid-section">
                <div className="blog-grid">
                    {filtered.map(post => (
                        <article className="blog-card" key={post.id}>
                            <div className="blog-card-icon">
                                <i className={post.icon}></i>
                            </div>
                            <div className="blog-card-body">
                                <div className="blog-card-meta">
                                    <span className="blog-category">{post.category}</span>
                                    <span className="blog-date"><i className="fa-regular fa-calendar"></i> {post.date}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                            </div>
                            <div className="blog-card-footer">
                                <div className="blog-author">
                                    <div className="blog-author-avatar">
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                    <div>
                                        <span className="author-name">{post.author}</span>
                                        <span className="author-role">{post.authorRole}</span>
                                    </div>
                                </div>
                                <span className="read-time"><i className="fa-regular fa-clock"></i> {post.readTime}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="blog-cta-section">
                <div className="blog-cta-box">
                    <i className="fa-solid fa-envelope-open-text blog-cta-icon"></i>
                    <h2>Never Miss an Update</h2>
                    <p>Join our community and get the latest fitness tips delivered straight to your WhatsApp.</p>
                    <a
                        href="https://wa.me/919833143308?text=Hello%20I%20want%20fitness%20tips"
                        className="btn hero-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-whatsapp"></i> Connect on WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Blog;
