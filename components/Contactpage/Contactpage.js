import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
        <section

            className="wpo-contact-pg-section section-padding ">
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundImage: 'url("/images/about/frontcbs.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1, // Keeps it behind the content
                }}
            >
                {/* Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
                    }}
                ></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div style={styles.item} className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div
                                        
                                        className="office-info-text">
                                            <h2 style={styles.colorWhite} >Address</h2>
                                            <p style={styles.colorWhite} >CBS GROUP OF INSTITUTIONS, 8Km. Mile Stone,
                                                Jhajjar-Kosli Road,Fatehpuri , Jhajjar
                                                Delhi-NCR (Haryana)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div style={styles.item}  className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2 style={styles.colorWhite} >Email Us</h2>
                                            <p></p>
                                            <p style={styles.colorWhite} > ceo@cbscolleges.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div style={styles.item}  className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2 style={styles.colorWhite} >Call Now</h2>
                                            <p style={styles.colorWhite} >+91-8053111333</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div
                        style={{
                            background: 'rgba(0, 0, 0, 0.7)',
                            backdropFilter: 'blur(3px)',
                            borderRadius: '15px',
                            // padding: '30px',
                            width: '100%',
                            // maxWidth: '800px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
                            border:'1px solid gray'
                        }}
                        className="wpo-contact-form-area">
                            <div className="wpo-contact-title">
                            <h2 style={styles.title}>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    {/* <iframe title='comtact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe> */}
                    <iframe title='comtact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2643140854634!2d76.5790007751759!3d28.53177408864968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6504120dc79f%3A0xd0a65426f74b6b63!2sCBS%20GROUP%20OF%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1729150999192!5m2!1sen!2sin" loading="lazy" ></iframe>
                </div>
            </section>
        </section>
    )

}

export default Contactpage;

const styles= {
    item:{
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional: semi-transparent background
        borderRadius: '8px', // Optional: rounded corners
        border:'1px solid white',
        color:'#fffs',
        minHeight: '400px',
    },
    colorWhite:{
        color:'#fff'
    },
    title:{
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.6) 80%, rgba(0, 0, 0, 0) 100%)',
    }
}
