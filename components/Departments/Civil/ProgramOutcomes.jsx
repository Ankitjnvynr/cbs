import React from 'react'

const ProgramOutcomes = () => {
    const containerStyle = {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundImage: "url('https://source.unsplash.com/random/?education,building')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    const cardStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      borderRadius: '1.5rem',
      padding: '2rem',
      width: '100%',
      maxWidth: '900px',
      fontFamily: 'Arial, sans-serif',
      color: '#000000', // Black font color for contrast
    };
  
    const headingStyle = {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#000000', // Black font color for heading
      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
    };
   
    const subheadingStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: '1.5rem',
        color: '#000000', // Black font color for heading
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
      };
    
    const paragraphStyle = {
      fontSize: '1.125rem',
      lineHeight: '1.75',
      marginBottom: '1rem',
      color: '#000000', // Black font color for paragraphs
    };
  
    const listStyle = {
      listStyleType: 'disc',
      paddingLeft: '1rem',
      marginBottom: '1rem',
      lineHeight: '1.75',
    };
  
    const listItemStyle = {
      marginBottom: '0.75rem',
      color: '#000000', // Black font color for list items
    };

    const listHeadingStyle = {
        fontSize: '1rem',
        fontWeight: 'bold',
       
        marginBottom: '1.5rem',
        color: '#000000', // Black font color for heading
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
      };
  
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>
          Program Outcomes
          </h1>

          <h1 style={subheadingStyle}>
          Engineering Graduates will be able to:
          </h1>
  
          <ul style={listStyle}>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO1. Engineering knowledge:</span> Apply the knowledge of mathematics, science, engineering 
            fundamentals, and an engineering specialization to the solution of complex engineering problems.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO2. Problem analysis:</span> Identify, formulate, review research literature, and analyze complex engineering
            problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and
            engineering sciences.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO3. Design/development of solutions:</span> Design solutions for complex engineering problems and design system
            components or processes that meet the specified needs with appropriate consideration for the public health and
            safety, and the cultural, societal, and environmental considerations.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO4. Conduct investigations of complex problems:</span> Use research-based knowledge and research methods
            including design of experiments, analysis and interpretation of data, and synthesis of the information to provide
            valid conclusions.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO5. Modern tool usage:</span> Create, select, and apply appropriate techniques, resources, and modern engineering
            and IT tools including prediction and modeling to complex engineering activities with an understanding of the
            limitations.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO6. The engineer and society: </span>Apply reasoning informed by the contextual knowledge to assess societal,
            health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional
            engineering practice.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO7. Environment and sustainability:</span> Understand the impact of the professional engineering solutions in
            societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO8. Ethics:</span> Apply ethical principles and commit to professional ethics and responsibilities and norms of the
            engineering practice.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO9. Individual and team work:</span> Function effectively as an individual, and as a member or leader in diverse
            teams, and in multidisciplinary settings.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO10. Communication:</span> Communicate effectively on complex engineering activities with the engineering
            community and with society at large, such as, being able to comprehend and write effective reports and design
            documentation, make effective presentations, and give and receive clear instructions.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO11. Project management and finance:</span> Demonstrate knowledge and understanding of the engineering and
            management principles and apply these to one’s own work, as a member and leader in a team, to manage projects
            and in multidisciplinary environments.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PO12. Life-long learning:</span> Recognize the need for, and have the preparation and ability to engage in
            independent and life-long learning in the broadest context of technological change.
            </li>
          </ul>
          </div>
      </div>
    );
  };

export default ProgramOutcomes
