// components/CreateNotice.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreateNotice = ({ onClose }) => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [priority, setPriority] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset any previous error message

    const noticeData = {
      title,
      content,
      author,
      expiration_date: expirationDate,
      priority,
    };

    try {
      const response = await fetch('/api/notices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noticeData),
      });

      if (!response.ok) {
        throw new Error('Failed to create notice');
      }

      const data = await response.json();
      alert(data.message); // Notify success
      router.push('/dashboard'); // Redirect to the dashboard or notices list
    } catch (error) {
      setError(error.message); // Display error message
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-50">
      <div
        style={{
          backdropFilter: "blur(5px)",
          border: "1px solid gray",
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          minWidth: 180,
          height: "95vh",
          background: "rgba(0, 0, 30, 0.3)",
        }}
        className="max-w-lg p-6 shadow-lg"
      >
        <h2 className="text-white text-3xl font-semibold mb-6 text-center">Add New Notice</h2>
        {error && <p className="text-red-300 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="block text-white font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-md bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-white font-medium">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 rounded-md bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              rows="4"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-white font-medium">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 rounded-md bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-white font-medium">Expiration Date</label>
            <input
              type="date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="w-full p-3 rounded-md bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-white font-medium">Priority</label>
            <input
              type="number"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-3 rounded-md bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              min="1"
              max="5"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200">
            Add Notice
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-500">Cancel</button>
      </div>
    </div>
  );
};

export default CreateNotice;
