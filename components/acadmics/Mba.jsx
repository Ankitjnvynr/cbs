import React from 'react'
import Image from 'next/image';
// const Mba = () => {
    const Mba = () => {
        const styles = {
            container: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px 20px',
              backgroundColor: '#f8f9fa',
              minHeight: '100vh',
            },
            heading: {
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '20px',
              textAlign: 'left',
            },
            imageWrapper: {
              width: '100%',
              maxWidth: '800px',
              height: '400px',
              position: 'relative',
              marginBottom: '20px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
            paragraph: {
              maxWidth: '800px',
              marginBottom: '16px',
              lineHeight: '1.6',
              textAlign: 'justify',
            },
            list: {
                display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '800px',
              marginBottom: '16px',
              paddingLeft: '0px',
              alignItems: 'left',
            },
            listItem: {
              marginBottom: '8px',
              alignItems:"left"
            },
            finalText: {
              marginTop: '20px',
              fontWeight: '600',
              fontSize: '18px',
              textAlign: 'center',
            },
            container2:{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft:"22vw",
              backgroundColor: '#f8f9fa',
              minHeight: '100vh',  
            }
          };
  return (
   <>
    <div style={styles.container}>
      <div style={styles.imageWrapper}>
        <Image
          src="/images/facilities/cbsclassrooms.jpg" // Replace with the correct image path
          alt="Mba"
          width={900}  // Replace with actual width
          height={500} 
        />
      </div>
      
      <p style={styles.paragraph}>
      The MBA programme offered at the college imparts a global outlook, equips the students with specialized skills and develops attitude that leads to excellence. At CBS we believe in nurturing leaders who are adept at handling the challenges offered by ever changing business environment. In this endeavour, we seek to provide our students with a unique inspirational transformation which will enable them to become reputed professionals in their chosen area of expertise. Our close links with industry give them ample opportunities to apply their acquired skills. The course curriculum is a tempting blend of in-depth subject knowledge and practical experience gained through a continuous process of industry academic interface. We aim to evolve through continuous learning which would be a mix of classroom and practical training coupled with a host of other initiatives. MBA programme keeps a sharp focus on total commitment to quality education and academic studies. These programme believes in promoting effective learning through the use of modern management tools and techniques. A unique blend of project work, seminars, case studies, class participation and visit to industries are undertaken for the overall development of the students. 
      </p>
      <p style={styles.paragraph}>
      Students will have to opt for a specialization covering a total of 8 subjects in stream such as Marketing, Finance, Human Resource Management, IT, International Business, Operations, etc. Student may specialize exclusively in one stream with 8 elective or opt for dual specialization (Major + Minor) with 6 elective towards a electives towards minor specialization (1 elective each in semester 3 & 4). 
      </p>
      {/* <p style={styles.paragraph}>
      CBS follow the most advanced, multi-dimensional training methodology involving techniques like case Study Methodology .of Management Game and Role plays, seminars & workshop, web-enabled learning, computerized business simulation and so on. 
      </p> */}
      </div>
      <div style={styles.container2}>
      <h2 style={styles.heading}>
      This program is offered in following specializations:
      </h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Marketing</li>
        <li style={styles.listItem}>Finance</li>
        <li style={styles.listItem}>Human Resource</li>
        <li style={styles.listItem}>International Business</li>
        <li style={styles.listItem}>Information Technology</li>
      </ul>
      </div>
   </>
  )
}

export default Mba
