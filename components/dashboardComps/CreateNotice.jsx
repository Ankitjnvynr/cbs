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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title || !content || !author) {
      setError('Please fill in all required fields.');
      return;
    }

    const noticeData = {
      title,
      content,
      author,
      expiration_date: expirationDate,
      priority,
    };

    try {
      setIsLoading(true);
      const response = await fetch('/api/notices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noticeData),
      });

      if (!response.ok) throw new Error('Failed to create notice');

      const data = await response.json();
      alert(data.message);
      router.push('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Modal content */}
      <div className="relative z-10 p-8 w-full max-w-lg mx-4 md:mx-auto rounded-lg shadow-xl"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // semi-transparent white background
          backdropFilter: 'blur(10px)', // frosted glass effect
          border: '1px solid rgba(255, 255, 255, 0.25)', // soft border to enhance glassy look
        }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Add New Notice</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-600">Title</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-3 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-600">Author</span>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="p-3 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
          </div>
          
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-600">Content</span>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="p-3 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-600">Expiration Date</span>
              <input
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className="p-3 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-600">Priority</span>
              <input
                type="number"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="p-3 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                max="5"
              />
            </label>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
            >
              {isLoading ? 'Adding...' : 'Add Notice'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNotice;
