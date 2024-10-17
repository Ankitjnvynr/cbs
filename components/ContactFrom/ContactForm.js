import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    });

    const [validator] = useState(
        new SimpleReactValidator({ className: 'errorMessage' })
    );

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: '',
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form
            onSubmit={(e) => submitHandler(e)}
            className="contact-validation-active"
        >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field" style={Styles.formField}>
                        <input
                            style={Styles.formInput}
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name"
                        />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field" style={Styles.formField}>
                        <input
                            style={Styles.formInput}
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email"
                        />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field" style={Styles.formField}>
                        <input
                            style={Styles.formInput}
                            value={forms.phone}
                            type="text"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Phone"
                        />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field" style={Styles.formField}>
                        <select
                            style={Styles.selectInput}
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            name="subject"
                        >
                            <option value="">Subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Support">Support</option>
                            <option value="Other">Other</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        style={Styles.textArea}
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        name="message"
                        placeholder="Message"
                    ></textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">
                    Submit Now
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

const Styles = {
    formField: {
        marginBottom: '15px',
    },
    formInput: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'transparent',
        border: '2px solid white',
        color: 'white',
        outline: 'none',
        borderRadius: '5px',
        fontSize: '16px',
    },
    selectInput: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'black', // Visible background
        color: 'white', // White text for contrast
        outline: 'none',
        border: '2px solid white',
        borderRadius: '5px',
        fontSize: '16px',
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
    },
    textArea: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'transparent',
        border: '2px solid white',
        color: 'white',
        outline: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        minHeight: '120px',
        resize: 'none',
    },
};
 
