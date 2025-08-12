import React, { useState } from 'react';
import axios from 'axios';

function FeedBackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'bug',
    message: '',
    screenshot: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('feedbackType', formData.feedbackType);
      data.append('message', formData.message);
      if (formData.screenshot) {
        data.append('screenshot', formData.screenshot);
      }

      const res = await axios.post('http://localhost:3000/api/auth/registerFeedback', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Feedback submitted successfully!');
      console.log(res.data);

      // Reset form
      setFormData({
        name: '',
        email: '',
        type: 'bug',
        message: '',
        screenshot: null
      });

    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again.');
    }
  };

  return (
    <div className="grid grid-rows-[1fr_4fr] justify-center text-center">
      <div>
        <p className="mt-12 font-semibold text-4xl">Submit Your Feedback</p>
        <p className="mt-3">
          Help us improve by sharing your thoughts, suggestions or reporting issues.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-rows-5 grid-cols-2 px-4 py-4 border-gray-200 border-[1px] rounded-md"
      >
        <div>
          <label className="block text-sm mb-2">Name (optional)</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-10 text-gray-500 rounded-md border border-gray-300 px-3"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Email (optional)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-gray-500 h-10 rounded-md border border-gray-300 px-3"
            placeholder="Your.email@example.com"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm text-left mb-2">type</label>
          <select
            name="type"
            value={formData.feedbackType}
            onChange={handleChange}
            className="border border-gray-300 text-gray-500 w-full h-10 px-2"
          >
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="general">General Feedback</option>
            <option value="improvement">Improvement Suggestions</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-sm text-left mb-2">message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="text-gray-500 border border-gray-300 w-full h-24 px-2 py-2 resize-none"
            placeholder="Please describe your feedback in detail"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm text-left mb-1">Attach a Screenshot</label>
          <input
            type="file"
            name="screenshot"
            accept="image/*"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500 border border-gray-400"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-black hover:bg-slate-900 text-white w-full h-10 rounded-2xl"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
}

export default FeedBackForm;
