import React, { useState } from 'react';

function PlacementFAQs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2d3748',
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const questionStyle = {
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '0.5rem',
    cursor: 'pointer',
  };

  const answerStyle = (isVisible) => ({
    color: '#4a5568',
    marginBottom: '1rem',
    maxHeight: isVisible ? '500px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease, opacity 0.3s ease',
    opacity: isVisible ? 1 : 0,
  });

  const faqs = [
    {
      question: "Who can register for Placement Assistance?",
      answer: "Any student who has more than 75% attendance in the classes and has secured the passing marks specified by the University...",
    },
    {
      question: "Where and how should the student register for Placement Assistance?",
      answer: "The students can contact the T&P team with a copy of the undertaking.",
    },
    {
      question: "Any pre-condition for registration?",
      answer: "The student is required to give a signed undertaking to the Placement Cell.",
    },
    {
      question: "What happens if the student does not register for Placement Assistance?",
      answer: "The Institution will assume that the student does not require any placement assistance from the institute and his/her name will be taken out of the placement process.",
    },
    {
      question: "What are the eligibility criteria for Placement Assistance?",
      answer: "1. Student should have more than the lowest passing marks.\n2. Students should be on rolls and must have successfully completed Summer Training.\n3. Student must have paid his/her fee.",
    },
    {
      question: "Where can the student see/view the details of the various job offers and apply?",
      answer: "T and P Notice Boards.",
    },
    {
      question: "Are there any additional registration requirements for Placement Processes?",
      answer: "Yes, the student has to send his/her nomination for interested companies to the T and P cell.",
    },
    {
      question: "Who nominates the students against particular offer?",
      answer: "T&P floats the Job Details and the students from that specialization will apply for that position. Depending on the requirements of the company, the student will be required to qualify based on certain Pre-Tests, short-listing criteria or Interviews.",
    },
    {
      question: "Can a student be considered for interview in case he/she has missed or not qualified in the nomination process?",
      answer: "No.",
    },
    {
      question: "Can a student approach the company directly quoting the announced offer?",
      answer: "No. If a student is found doing so, his/her name will be taken out of the Placement Process.",
    },
    {
      question: "How many maximum withdrawals from selection processes a student can avail?",
      answer: "Maximum 2, but once he/she avails the third, he/she is taken out of the Placement Process.",
    },
    {
      question: "What happens if a student gets nominated but later he/she does not appear for the interview?",
      answer: "It amounts to one withdrawal.",
    },
    {
      question: "How many opportunities a student can avail?",
      answer: "The students can apply in all the companies offering jobs in their preferred specialization. As a rule, the student is required to go through the whole process with each Corporate. Absence at any stage amounts to withdrawal.",
    },
    {
      question: "What happens if a student is selected by a company, but the FPO (Final Placement Offer) happens to be not the student’s dream company?",
      answer: "Once student gets an FPO, he gets out of the Placement Process.",
    },
    {
      question: "When a student gets shortlisted in a company, can the student appear for more interviews?",
      answer: "Yes, till the student gets selected in a company, provided he has not withdrawn twice from the selection processes in previous companies.",
    },
    {
      question: "Can a student give nomination in the next company, in case he/she got selected in previous company?",
      answer: "No, a student can have only one FPO.",
    },
    {
      question: "Can a student give nomination in another company, in case he/she did not get selected in previous company?",
      answer: "Yes, provided he has not withdrawn twice from selection processes in previous companies.",
    },
    {
      question: "Is it compulsory for the students to join those companies from where they got FPO during their Summer Training?",
      answer: "No. But in case the student is interested to join the Summer Training Company, they have to convey their desire to T&P.",
    },
    {
      question: "Can a student join his Summer Training Company even after having been selected by some other company at a later stage?",
      answer: "No.",
    },
    {
      question: "Can a student withdraw from a company after accepting the FPO?",
      answer: "No.",
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Placement Assistance FAQs</h1>
        
        {faqs.map((faq, index) => (
          <div key={index}>
            <p style={questionStyle} onClick={() => handleToggle(index)}>
              Q:- {faq.question}
            </p>
            <div style={answerStyle(activeIndex === index)}>
              {faq.answer.split('\n').map((line, i) => (
                <p key={i}> Ans:- {line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacementFAQs;
