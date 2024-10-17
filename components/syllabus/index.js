// pages/syllabi.js
import Link from 'next/link';

const syllabiData = [
  { program: "B.Tech (All 1st Year)", syllabus: "B.TECH 1st Year All G Scheme" },
  { program: "B.Tech CSE", syllabus: "B.TECH CSE G Scheme" },
  { program: "B.Tech ECE", syllabus: "B.TECH ECE G Scheme" },
  { program: "B.Tech ME", syllabus: "B.TECH ME G Scheme" },
  { program: "B.Tech Civil", syllabus: "B.TECH CIVIL G Scheme" },
  { program: "B.Tech FTS", syllabus: "B.TECH FTS G Scheme" },
  { program: "B.Tech EE", syllabus: "B.TECH EE G Scheme" },
  { program: "BCA", syllabus: "BCA SYLLABUS" },
  { program: "BBA", syllabus: "BBA SYLLABUS" },
  { program: "MCA", syllabus: "MCA SYLLABUS" },
];

const Syllabi = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Syllabi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {syllabiData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-4">{item.program}</h2>
            <Link href="#">
              <a className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                {item.syllabus}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabi;
