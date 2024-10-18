import React from 'react';
import ContactForm from '../ContactFrom/ContactForm';

const Contactpage = () => {
    return (
        <section className="wpo-contact-pg-section section-padding">
            {/* Background Image Section */}
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
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black
                    }}
                ></div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                     

                        {/* Main Content Section */}
                        <div
                            style={{
                                background: 'rgba(4, 74, 132, 0.4)',
                                backdropFilter: 'blur(3px)',
                                borderRadius: '15px',
                                width: '100%',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
                                border: '1px solid gray',
                                padding: '30px', // Optional padding for layout
                                textAlign:'justify'
                            }}
                          
                        >
                           

                            {/* Vision, Mission, and Objectives Section */}
                            <div style={{color:'white'}}>
                                <h2 style={{color:'white'}}>OUR VISION</h2>
                                <p style={{color:'white'}}>
                                    Vision without action is merely a dream, action without vision, 
                                    just time pass. Vision with action can change the world. CBS offers 
                                    a multidisciplinary education platform which will enable students to 
                                    pursue their area and subjects of interest and excel in all walks of life. 
                                    The Institution is envisioned to provide an enriched and supportive ambience 
                                    of creative ideas by delving into the depth of young minds and helping them 
                                    to provide best results for the development of self, society, and the country 
                                    as a whole. The institution has a vision to emerge as a centre of excellence 
                                    of national and global repute for the students, academicians, and industries.
                                </p>

                                <h2 style={{color:'white'}}>OUR MISSION</h2>
                                <p style={{color:'white'}}>
                                    The mission of CBS GROUP OF INSTITUTIONS is to impart high quality education 
                                    and training to its students to make them world-class engineers and managers 
                                    with a foresight to the changes and problems, and pioneers to offer innovative 
                                    solutions to benefit the nation and the world at large. We are confident that 
                                    our well-qualified, dedicated, and professional faculty will generate a new crop 
                                    of students who will be harbinger of change and development in near future.
                                </p>

                                <h2 style={{color:'white'}}> OBJECTIVES:</h2>
                                <p style={{color:'white'}}>
                                    Education is a rich blend of knowledge, self-discipline, experiments, and harmony. 
                                    For imparting quality education to the students, CBS has set Goals and Objectives 
                                    which are as follows:
                                </p>
                                <ul style={{color:'white'}}>
                                    <li>
                                        To ensure all-round development of students through a judicious blend of 
                                        curricular, co-curricular, and extracurricular activities.
                                    </li>
                                    <li>
                                        To inculcate moral values in students like Integrity, Transparency, Team Work, 
                                        Execution with Passion, Discipline, etc.
                                    </li>
                                    <li>
                                        To develop students who can think critically, communicate effectively, and 
                                        demonstrate global awareness.
                                    </li>
                                    <li>To develop the institute as a knowledge center.</li>
                                    <li>To engage students in learning experiences that lead to increased employment.</li>
                                    <li>
                                        To provide an environment that enables students and faculty to make lasting 
                                        contributions to the advancement of knowledge.
                                    </li>
                                    <li>To be a provider of globally-competitive proficient professionals.</li>
                                    <li>
                                        To nurture and sustain academic excellence, programmed to promote innovation, 
                                        scholarship, and abilities.
                                    </li>
                                    <li>
                                        To foster academic-industry, professional synergies, and alliances for greater 
                                        upward mobility.
                                    </li>
                                    <li>
                                        To enlighten individuals with qualitative and technical parameters and enrich 
                                        mind skills, ethics, and practical knowledge.
                                    </li>
                                </ul>
                            </div>

                            {/* Uncomment to use Contact Form */}
                            {/* <ContactForm /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactpage;

const styles = {
    item: {
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional: semi-transparent background
        borderRadius: '8px', // Optional: rounded corners
        border: '1px solid white',
        color: '#fff',
        minHeight: '400px',
    },
    colorWhite: {
        color: '#fff',
    },
    title: {
        background:
            'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.6) 80%, rgba(0, 0, 0, 0) 100%)',
    },
    contentSection: {
        textAlign: 'left',
        marginTop: '30px',
    },
    list: {
        listStyleType: 'disc',
        marginLeft: '20px',
        lineHeight: '1.6',
    },
};
