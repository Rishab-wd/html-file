import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://html-file-ohcp.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert('✅ Contact saved successfully! We will get back to you soon.');
                // Clear the form
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: ''
                });
            } else {
                alert(`❌ ${data.message || 'Failed to submit form'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('❌ Network error. Please make sure the server is running.');
        }
    };

    return (
        <>
            {/* ===== CONTACT SECTION ===== */}
            <section className="contact-section" id="contact">
                <div className="main-text">
                    <h2>Contact <strong>Us</strong></h2>
                    <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <div className="contact-container">
                    {/* Contact Form */}
                    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Your Name" 
                                required 
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Your Email" 
                                required 
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input 
                                type="number" 
                                name="phoneNumber" 
                                id="phoneNumber" 
                                placeholder="Your Phone Number" 
                                required 
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn hero-btn">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
