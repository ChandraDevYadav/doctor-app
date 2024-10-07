import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const profile = () => {
  const doctor = {
    name: 'Dr. Emily Johnson',
    specialty: 'Cardiologist',
    imageUrl: '/doctor-profile.jpg',
    bio: 'Dr. Emily Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She is dedicated to providing the best care and staying up-to-date with the latest advances in heart health.',
    location: '123 Health Street, Medical City, CA',
    contact: {
      phone: '(123) 456-7890',
      email: 'emily.johnson@healthcare.com',
    },
    reviews: [
      { id: 1, reviewer: 'John Doe', rating: 5, comment: 'Dr. Emily is amazing! She truly cares about her patients.' },
      { id: 2, reviewer: 'Jane Smith', rating: 4, comment: 'Very knowledgeable and friendly. Highly recommend!' },
      { id: 3, reviewer: 'Mike Lee', rating: 5, comment: 'Excellent doctor with a compassionate approach.' },
    ],
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'} />
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-6">
        <Image
        width='250'
        height='250'
          src={doctor.imageUrl}
          alt={doctor.name}
          className="w-32 h-32 rounded-full border-2 border-gray-300"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <p className="text-lg text-gray-600">{doctor.specialty}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2 text-gray-700">{doctor.bio}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2">
          <p className="flex items-center">
            <FaPhoneAlt className="mr-2 text-gray-500" /> {doctor.contact.phone}
          </p>
          <p className="flex items-center mt-1">
            <FaEnvelope className="mr-2 text-gray-500" /> {doctor.contact.email}
          </p>
          <p className="flex items-center mt-1">
            <FaMapMarkerAlt className="mr-2 text-gray-500" /> {doctor.location}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Patient Reviews</h2>
        {doctor.reviews.map((review) => (
          <div key={review.id} className="border-b py-4">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold">{review.reviewer}</p>
              <div className="flex">{renderStars(review.rating)}</div>
            </div>
            <p className="mt-2 text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default profile;
