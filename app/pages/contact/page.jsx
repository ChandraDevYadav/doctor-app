'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <div className='grid grid-cols-1 bg-cover bg-left' style={{ backgroundImage: "url('/pageheader.jpg')" }}>
        <div className='flex justify-center items-center py-16 md:py-24'>
          <div className=''>
            <h1 className='text-3xl md:text-5xl font-bold py-4 md:py-6 text-blue-600'>From Our Contact Us</h1>
            <div className='text-center flex justify-center items-center'>
              <p className='text-blue-600 text-center text-lg font-semibold'>Home&nbsp; - &nbsp;</p>
              <Link href='/' className='text-lg font-semibold'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-24">
        <h1 className="text-2xl md:text-5xl text-center font-bold py-10">Contact Us</h1>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div>
              <div className='border-l-4 border-l-blue-600 rounded pl-3 mt-6'>
                <h1 className='font-bold text-xl'>Office Address:</h1>
                <p>Suite 02, Level 12, Sahera Tropical Center 218</p>
                <p>Bhattachowk-1 Biratnagar Nepal</p>
              </div>
              <div className='border-l-4 border-l-blue-600 rounded pl-3 my-6'>
                <h1 className='font-bold text-xl'>Phone Number:</h1>
                <p>+977-9805912060, 9800000000</p>
                <p>021-80000111</p>
              </div>
              <div className='border-l-4 border-l-blue-600 rounded pl-3'>
                <h1 className='font-bold text-xl'>Email Address:</h1>
                <Link href=''>support@chandradev</Link>
              </div>
              <div className='border-l-4 border-l-blue-600 rounded pl-3 mt-6'>
                <h1 className='font-bold text-xl'>Website Address:</h1>
                <Link href=''>http://chandradev@</Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded p-2"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded p-2"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className='mb-4'>
                <label className="block text-sm font-medium mb-2">Department</label>
                <select
                  id="department"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                  className="block w-full p-2 border border-gray-300 rounded bg-transparent text-gray-400"
                >
                  <option value="" disabled>Select a department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded p-2"
                  rows="5"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6">      
        <div className="map-container mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6567382321586!2d87.26991971463943!3d26.4535543833335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef73937e2033a7%3A0xa0e8ec70b1549b94!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2sus!4v1632908239609!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className='w-full'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
