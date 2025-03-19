import React from 'react'

const Btech = () => {
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
     paddingTop:"20px",
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

    const imageWrapper = {
      width: '100%',
    };
  
    // const listStyle = {
    //   listStyleType: 'disc',
    //   paddingLeft: '1rem',
    //   marginBottom: '1rem',
    //   lineHeight: '1.75',
    // };

    const image = {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
    };

    const tableHeaderStyle = {
        padding: "10px",
        border: "1px solid #ddd",
        textAlign: "left",
        fontWeight: "bold",
      };
      
      const tableCellStyle = {
        padding: "10px",
        border: "1px solid #ddd",
      };
      
      const rowEven = {
        backgroundColor: "#fff",
      };
      
      const rowOdd = {
        backgroundColor: "#f7f7f7",
      };
      
    const data = [
        { id: 1, name: "Full  Form of B.Tech", desc: "Bachelor of Technology" },
        { id: 2, name: "Duration of B.Tech", desc: "4 Years" },
        { id: 3, name: "B.Tech Eligibility", desc: "10+2 (Mathematics, Physics, and Chemistry)" },
        { id: 4, name: "B.Tech Specialisations", desc: "Civil Engineering, Mechanical Engineering, Computer Science Engineering, Marine Engineering, Electrical Engineering, etc." },
        { id: 5, name: "B.Tech Salary", desc: "INR 6 to 30 LPA" },
        { id: 6, name: "B.Tech Job Scope", desc: "Chemical Engineer, Mechanical Engineer, Computer Science Engineer, etc." },
       
      ];

      const cards = [
        {
          title: "Mechanical Engineering",
          description:
            "Mechanical engineering is a very broad field of engineering that involves the application of physical principles for analysis, design,...",
          color: "text-yellow-500",
          link:"/academic/under-graduate/b.Tech-b.tech-leet/mechanical-engineering/"
        },
        {
          title: "Civil engineering",
          description:
            "Civil Engineering is one of the oldest engineering disciplines, since civil engineers in one form or another have been around ever since...",
          color: "text-purple-500",
          link:"/academic/under-graduate/b.Tech-b.tech-leet/civil-engineering/"
        },
        {
          title: "Computer Science Engineering",
          description:
            "The Computer Science Engineering course at CBS Group of Institutions provides a platform for students to enhance their skills in various...",
          color: "text-red-500",
          link:"/academic/under-graduate/b.Tech-b.tech-leet/computer-science-engineering/"
        },
        {
            title: "Electronics & Communication Engineering",
            description:
              "The Electronics and Communication Engineering program deals with analog and digital transmission and reception of data,  voice and video...",
            color: "text-red-500",
            link:"/academic/under-graduate/b.Tech-b.tech-leet/electronics-communication-engineering/"
          },
          {
            title: "Electrical Engineering",
            description:
              "The program provides to illustrate practical and theoretical aspects of basic electrical devices, circuits, networks, electrical machines, ...",
            color: "text-red-500",
            link:"/academic/under-graduate/b.Tech-b.tech-leet/electrical-engineering/"
          },
      ];
  
    // const listItemStyle = {
    //   marginBottom: '0.75rem',
    //   color: '#000000', // Black font color for list items
    // };
  
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>

        <div style={imageWrapper}>
          {/* <img
            src="/images/civil.jpg" // Replace with the correct image path
            alt="CivilEngineering-CBSGroup"
            style={image}
          /> */}
          
        </div>
          <br />
          <p style={paragraphStyle}>
          B.Tech is a 4-year undergraduate programme. 
          The programme's main goal is to provide you with a solid foundation in engineering.
           B.Tech programmes educate technical skills and engineering principles.
            It includes a wide range of fields.
             Civil, mechanical, electrical, and computer science engineering are among them. 
          </p>
          <h1 style={headingStyle}>
          B.Tech Course Highlights
          </h1>
  
          <div style={{ padding: "5px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              {/* <tr style={{ backgroundColor: "#ddd" }}>
                <th style={tableHeaderStyle}>Sr. No.</th>
                <th style={tableHeaderStyle}>Name</th>
                <th style={tableHeaderStyle}></th>
              </tr> */}
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} style={index % 2 === 0 ? rowEven : rowOdd}>
                  {/* <td style={tableCellStyle}>{item.id}</td> */}
                  <td style={tableCellStyle}>{item.name}</td>
                  <td style={tableCellStyle}>{item.desc}</td>
                  {/* <td style={tableCellStyle}>
                    <a
                      href={item.link}
                      style={{ color: "blue", textDecoration: "none" }}
                      download
                    >
                      Download
                    </a>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h1 style={headingStyle}>
           Courses Under B.Tech-b.tech(LEET)
          </h1>

          <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl ">
        {cards.map((card, index) => (
          <div key={index} className="relative bg-white p-6 rounded-xl shadow-lg " style={{marginBottom:"10px",borderRadius:"15px",padding:"12px"}}>
            {/* Decorative blob */}
            <div className="absolute -top-5 right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-75"></div>
            <h2 className=" text-gray-900" style={{fontSize:"25px"}}>{card.title}</h2>
            <p className="text-gray-600 mt-1">{card.description}</p>
            <a
  href={card.link}
  className={`mt-4 inline-block font-semibold no-underline ${card.color} hover:opacity-80 transition`} 
>
  Learn More →
</a>
          </div>
        ))}
      </div>
    </div>

          {/* <p style={paragraphStyle}>
          This is the challenge being faced by today’s civil engineers.
           Studying a graduate course in Civil Engineering offers chance to 
           understand the diversity of activity and skills that civil engineers are involved in. 
           Projects, such as The Delhi and Hyderabad airport are the handiwork of talented and
            enthusiastic civil engineers. Seize your chance to be one of them by studying a graduate
             program in civil engineering at CBS Group of Institutions.The Institute has provided a
              good grooming ground for Civil Engineering by making available ISO certified instruments
               in various well-equipped laboratories.
          </p> */}
          {/* <p style={paragraphStyle}>
          The labs at CBS College included in Civil Engineering are:
          </p> */}

          {/* <p style={{fontWeight:"bolder"}}>
          Structural Analysis Lab, Fluid Mechanics Lab, Surveying Lab, Concrete Lab.
          </p> */}

         
  
          
        </div>
      </div>
    );
  };


export default Btech