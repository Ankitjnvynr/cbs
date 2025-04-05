import React, { useState } from 'react';
import contactService from '../../services/contactServices';
import { toast } from 'react-toastify';

const CtaSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(
            formData.name == '' || formData.email == '' || formData.phone ==''
        ){
            toast.error("All fields are required")
            return
        }
        try {
            const response = await contactService.addRecord(formData)
            if(response.code === 201) {
                toast.success("Form sent Successfully")
                setFormData(
                    {
                        name: '',
                        email: '',
                        phone: ''
                    }
                )
            }else{
                toast.error("Something went wrong !! try again")
            }
            // console.log(response)
        } catch (error) {
            toast.error("Something went wrong !! try again")
            // throw new Error(error)
            
        }
        console.log(formData)
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
                            <input required type="text" placeholder="Your Name*" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="input-filled">
                            <input required type="text" placeholder="Your Email*" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="input-filled">
                        <input required type="text" placeholder="Your Phone*" name="phone" value={formData.phone} onChange={handleChange} />
                            
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
