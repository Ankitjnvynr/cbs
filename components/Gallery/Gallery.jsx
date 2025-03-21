import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/images/about/building.jpg", title: "Campus Building", subtitle: "" },
  { src: "/images/facilities/cbscomputerlab.jpg", title: "Computer Lab", subtitle: "" },
  { src: "/images/facilities/cbssports.jpg", title: "Sports Ground", subtitle: "" },
  { src: "/images/facilities/cbsclassrooms.jpg", title: "Classrooms", subtitle: "" },
];

const building = [
    { src: "/images/building/1.jpg",  },
    { src: "/images/building/2.jpg",  },
    { src: "/images/building/3.jpg",  },
    { src: "/images/building/4.jpg",  },
    { src: "/images/building/5.jpg",  },
    { src: "/images/building/6.jpg",  },
  ];

  const sports = [
    { src: "/images/sports/1.jpg", },
    { src: "/images/sports/2.jpg", },
    { src: "/images/sports/3.jpg", },
    { src: "/images/sports/4.jpg", },
    { src: "/images/sports/5.jpg", },
    { src: "/images/sports/6.jpg", },
  ];

  const campus = [
    { src: "/images/campus/1.jpg", },
    { src: "/images/campus/2.jpg", },
    { src: "/images/campus/3.jpg", },
    { src: "/images/campus/4.jpg", },
    { src: "/images/campus/5.jpg", },
    { src: "/images/campus/6.jpg", },
  ];

  const labs = [
    { src: "/images/labs/l1.jpg", },
    { src: "/images/labs/l2.jpg", },
    { src: "/images/labs/l3.jpg", },
    { src: "/images/labs/l4.jpg", },
    { src: "/images/labs/l5.jpg", },
    { src: "/images/labs/l6.jpg", },
  ];
const Gallery = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="p-10 max-w-7xl mx-auto text-center " >
      {/* <h1 className="text-4xl font-extrabold mb-6 text-gray-900" style={{paddingTop:"1rem"}}>OUR GALLERY</h1> */}

      <div className="relative flex items-center justify-center w-full overflow-hidden" style={{display:"flex",padding:"5rem"}}    >
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-white p-3 rounded-full "
          style={{border:"none"}}
        >
          ◀
        </button>
        <div className="flex items-center justify-center w-full max-w-4xl gap-4" style={{display:"flex"}}>
          {images.map((image, i) => (
            <motion.div
              key={i}
              className={`relative w-1/4 p-2 ${i === index ? "scale-110 z-10" : "opacity-75"}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: i === index ? 1 : 0.5, x: 0 }}
              transition={{ duration: 0.5 }}
              
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                style={{width:"20rem",borderRadius:"10px"}}
              />
              {i === index && (
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-xl font-bold">{image.title}</h2>
                  <p>{image.subtitle}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-white p-3 rounded-full shadow-md"
          style={{border:"none"}}
        >
          ▶
        </button>
        
      </div>
        <div>
            <h1>Campus Building</h1>
        </div>
        <div style={{display:"flex",flexWrap:"wrap", gap:"10px",paddingLeft:"9rem"}}>
            {building.map((image,i)=>(
                <div key={i} >
                <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                style={{borderRadius:"10px",width:"28rem",height:"15rem"}}
              />
                </div>
            ))}
        </div>
        <div style={{marginTop:"4rem"}}>
        <div>
            <h1>Sports</h1>
        </div>
        <div style={{display:"flex",flexWrap:"wrap", gap:"10px",paddingLeft:"9rem"}}>
            {sports.map((image,i)=>(
                <div key={i} >
                <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                style={{borderRadius:"10px",width:"28rem",height:"15rem"}}
              />
                </div>
            ))}
        </div>
        </div>

        <div style={{marginTop:"4rem"}}>
        <div>
            <h1>Campus</h1>
        </div>
        <div style={{display:"flex",flexWrap:"wrap", gap:"10px",paddingLeft:"9rem"}}>
            {campus.map((image,i)=>(
                <div key={i} >
                <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                style={{borderRadius:"10px",width:"28rem",height:"15rem"}}
              />
                </div>
            ))}
        </div>
        </div>

        <div style={{margin:"4rem 0"}}>
        <div>
            <h1>Labs</h1>
        </div>
        <div style={{display:"flex",flexWrap:"wrap", gap:"10px",paddingLeft:"9rem"}}>
            {labs.map((image,i)=>(
                <div key={i} >
                <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                style={{borderRadius:"10px",width:"28rem",height:"15rem"}}
              />
                </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Gallery;
