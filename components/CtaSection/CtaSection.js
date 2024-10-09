import React, { useState } from 'react';

const CtaSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: 'Your City*'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-wrap">
                    <div className="content">
                        <h2>Get A Free Advice for Admission</h2>
                        <p>Drop us a line! We are here to answer your questions 24/7</p>
                    </div>
                    <form className="cta-form" onSubmit={handleSubmit}>
                        <div className="input-filled">
                            <input type="text" placeholder="Your Name*" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="input-filled">
                            <input type="text" placeholder="Your Email*" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="input-filled">
                        <input type="text" placeholder="Your City*" name="email" value={formData.company} onChange={handleChange} />
                            
                        </div>
                        <div className="input-filled">
                            <button type="submit">Free Advice</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CtaSection;
