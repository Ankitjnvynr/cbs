// pages/syllabi.js
import Link from 'next/link';
import { FaBookOpen, FaLaptop } from 'react-icons/fa'; // Import only required icons

const SyllabusCardData = [
  { program: "B.Tech (All 1st Year)", syllabus: "B.TECH 1st Year All G Scheme", icon: <FaBookOpen /> },
  { program: "B.Tech CSE", syllabus: "B.TECH CSE G Scheme", icon: <FaLaptop /> },
  { program: "B.Tech ECE", syllabus: "B.TECH ECE G Scheme", icon: <FaLaptop /> },
  { program: "B.Tech ME", syllabus: "B.TECH ME G Scheme", icon: <FaBookOpen /> },
  { program: "B.Tech Civil", syllabus: "B.TECH CIVIL G Scheme", icon: <FaBookOpen /> },
  { program: "B.Tech FTS", syllabus: "B.TECH FTS G Scheme", icon: <FaBookOpen /> },
  { program: "B.Tech EE", syllabus: "B.TECH EE G Scheme", icon: <FaBookOpen /> },
  { program: "BCA", syllabus: "BCA SYLLABUS", icon: <FaLaptop /> },
  { program: "BBA", syllabus: "BBA SYLLABUS", icon: <FaLaptop /> },
  { program: "MCA", syllabus: "MCA SYLLABUS", icon: <FaLaptop /> },
];

const SyllabusCard = () => {
  return (
  //   <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/images/background.jpg')] bg-cover bg-center p-10">
  //   <h1 className="text-4xl font-bold text-white mb-12 drop-shadow-lg">Syllabus Overview</h1>
  //   <div className="flex flex-wrap justify-center gap-8">
  //     {SyllabusCardData.map((item, index) => (
  //       <div
  //         key={index}
  //         className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 text-center transition-transform hover:scale-105 hover:bg-white/30 backdrop-blur-md"
  //       >
  //         <div className="text-5xl text-blue-600 mb-4">{item.icon}</div>
  //         <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{item.program}</h2>
  //         <Link href="#">
  //           <p className="bg-green-500/80 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all cursor-pointer">
  //             {item.syllabus}
  //           </p>
  //         </Link>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  


<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>


  
  );
};

export default SyllabusCard;
