import React, { useState } from "react";
import { useRouter } from "next/router";

const CreateNotice = ({ onClose }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title || !content ) {
      setError("Please fill in all required fields.");
      return;
    }

    const noticeData = {
      title,
      content,
    
      expiration_date: expirationDate,
      
    };

    try {
      setIsLoading(true);
      const response = await fetch("/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noticeData),
      });

      if (!response.ok) throw new Error("Failed to create notice");

      const data = await response.json();
      alert(data.message);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 p-3"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative z-10 p-8 w-full max-w-lg mx-4 md:mx-auto rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Add New Notice
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div
            style={{
              display: "flex",
              flexWrap:'wrap'
            }}
            className="flex"
          >
            <label style={styles.formItem} className="form-item flex flex-col">
              <span className="text-sm font-medium  text-white">Title</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className=" mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
            {/* <label style={styles.formItem} className="form-item flex flex-col">
              <span className="text-sm font-medium  text-white">Author</span>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className=" mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label> */}
            <label style={styles.formItem} className="form-item flex flex-col">
              <span className="text-sm font-medium  text-white">Content</span>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className=" mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="1"
                required
              />
            </label>
            <label style={styles.formItem} className="form-item flex flex-col">
              <span className="text-sm font-medium  text-white">
                Expiration Date
              </span>
              <input
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className=" mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            {/* <label style={styles.formItem} className="form-item flex flex-col">
              <span className="text-sm font-medium  text-white">
                Priority
              </span>
              <input
                type="number"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className=" mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                max="5"
              />
            </label> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>

          <div className="flex justify-end space-x-3 mt-6">
            
            <button
              type="submit"
              style={styles.base}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-black rounded font-semibold  transition duration-200"
            >
              {isLoading ? "Adding..." : "Add Notice"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNotice;

const styles =  {
    formItem: {
        "flex": "1 0 322px",
        
        color:'black',
        margin:5,
        padding:'3',
        'border-radius':10,
        display:'flex',
        'flex-direction':'column'
    },
    base: {
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'background-color 0.3s, transform 0.2s',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-block',
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      },
}

