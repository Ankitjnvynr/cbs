import React from 'react';

function Chairman() {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'linear-gradient(to right, #ebf8ff, #fff, #e9d8fd)',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '160px',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '0.5rem',
  };

  const subheadingStyle = {
    fontSize: '1.25rem',
    color: '#4a5568',
  };

  const smallTextStyle = {
    fontSize: '0.875rem',
    color: '#718096',
    marginBottom: '1.5rem',
  };

  const paragraphStyle = {
    color: '#4a5568',
    lineHeight: '1.75',
    marginBottom: '1rem',
  };

  const finalTextStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2d3748',
    marginTop: '1.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <img
            src="/images/chairman-cbs.jpg"
            alt="President Hansraj Dhankar"
            style={imageStyle}
          />
          <h1 style={headingStyle}>Message from the President</h1>
          <p style={subheadingStyle}>Hansraj Dhankar</p>
          <p style={smallTextStyle}>President, CBS Group of Institutions</p>
        </div>

        <div>
          <p style={paragraphStyle}>
            While penning down this message, I am getting nostalgic about my college life. First of all, I welcome you all to{' '}
            <span style={{ fontWeight: '600' }}>CBS Group of Institutions</span>. I wish to convey my heartiest felicitations to all the students who have come out with flying colors in their last academic exams. I know you had to shed a lot of sweat to come to the present state of your career and you got the chance to enter into college life.
          </p>
          <p style={paragraphStyle}>
            Taking a correct and calculated decision to choose one’s career path is very difficult. But I am sure you must have introspected enough and finally dared to take the decision to pursue the career you have chosen. Once you have made up your mind, you must go ahead – plan and work hard to achieve the goal which you have set for yourself because lackluster attitude towards career gives birth to failure. Regularity, hard work, and practical training are of utmost importance in exams and career. Mind you, hard work never goes to waste; it surely brings desired results. With the changing economic scenario, it is time that students change their mindset and approach and develop skills in as many areas as possible.
          </p>
          <p style={paragraphStyle}>
            This is an era of skill-oriented and techno-savvy professionals where you have to develop your personality in a multifarious manner. Students need to remain updated about the latest developments and trends. Developing effective communication skills is another equally important area as it serves as the master key to get the best placements.
          </p>
          <p style={paragraphStyle}>
            CBS GROUP OF INSTITUTIONS will be running a personality development program for our budding technocrats and business executives. It is our responsibility and commitment to provide students easy access to the best possible facilities for academic excellence, cultural and sports activities. Today, students need many more skills than just good marks to succeed in professional and personal life. We as management and you as students have to accept and address the winds of change and challenges that come our way.
          </p>
          <p style={paragraphStyle}>
            In the midst of stress, tension, and competition, you must have self-control against various distractions. Your studies should not suffer. It is up to you to make a choice: whether you would like to do the right things or the wrong; whether to be happy or not. You are the master of your own life. Preserve age-old values and family traditions, and ultimately become a good human being. Always be eager to learn new things. Learning leads to intellectual and spiritual development, which in turn leads to a meaningful and fulfilling life, bringing peace and harmony all around.
          </p>
          <p style={paragraphStyle}>
            Believe in your abilities and dream big—nothing is impossible. Identify your weaknesses, work hard on them, and hone your strengths so that your success story can be written in bold letters. Hopefully, your unflinching efforts will earn you success in your cherished goals.
          </p>
          <p style={paragraphStyle}>
            I hope that our honest intentions and actions of providing modern facilities, combined with your hard work, will help translate our vision and mission—and your dreams—into reality, bringing glory to you and everyone concerned.
          </p>

          <p style={finalTextStyle}>Wish you a bright future.</p>
        </div>
      </div>
    </div>
  );
}

export default Chairman;
