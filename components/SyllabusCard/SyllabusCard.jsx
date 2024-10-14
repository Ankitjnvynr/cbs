import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const SyllabusCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="glass-card max-w-sm  p-5 rounded-lg shadow-lg backdrop-blur-md border border-red-100/40 bg-blue/20">
        <h3 className="text-xl font-bold text-black mb-2">Syllabus Title</h3>
        <p className="text-black mb-4">Here is a brief description of the syllabus content, outlining the key points that the students will learn.</p>
        <div className="flex justify-end">
          <a
            href="#"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default SyllabusCard;
