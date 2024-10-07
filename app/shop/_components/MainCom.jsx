'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaEye, FaHeart, FaShoppingCart, FaShareAlt, FaStar, FaRetweet } from 'react-icons/fa';
import { List, TableCellsMerge } from 'lucide-react';

const MainCom = () => {
  const [viewMode, setViewMode] = useState('grid'); // Track the view mode (grid or list)

  // Array of medicines
  const medicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      type: 'Pain Reliever',
      price: 5.99,
      description: 'Used to treat mild to moderate pain and reduce fever.',
      imageUrl: '/med1.jpg',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      type: 'Antibiotic',
      price: 12.99,
      description: 'An antibiotic used to treat various bacterial infections.',
      imageUrl: '/med2.jpg',
      rating: 4.0,
    },
    {
      id: 3,
      name: 'Cetirizine 10mg',
      type: 'Antihistamine',
      price: 6.99,
      description: 'Helps relieve allergy symptoms such as runny nose, sneezing, and itching.',
      imageUrl: '/med3.jpg',
      rating: 3.5,
    },
    {
      id: 4,
      name: 'Ibuprofen 400mg',
      type: 'Anti-inflammatory',
      price: 8.49,
      description: 'Used to reduce fever and treat pain or inflammation.',
      imageUrl: '/med4.jpg',
      rating: 4.8,
    },
    {
      id: 5,
      name: 'Metformin 500mg',
      type: 'Diabetes Medication',
      price: 15.99,
      description: 'Helps control blood sugar levels in people with type 2 diabetes.',
      imageUrl: '/med5.jpg',
      rating: 4.3,
    },
    {
      id: 6,
      name: 'Aspirin 81mg',
      type: 'Blood Thinner',
      price: 4.99,
      description: 'Used to reduce the risk of heart attack and stroke.',
      imageUrl: '/med6.jpg',
      rating: 4.1,
    },
    {
      id: 7,
      name: 'Omeprazole 20mg',
      type: 'Antacid',
      price: 10.49,
      description: 'Used to treat acid reflux and stomach ulcers.',
      imageUrl: '/med7.jpg',
      rating: 3.9,
    },
    {
      id: 8,
      name: 'Lisinopril 10mg',
      type: 'Blood Pressure Medication',
      price: 11.99,
      description: 'Used to treat high blood pressure and heart failure.',
      imageUrl: '/med8.jpg',
      rating: 4.6,
    },
    {
      id: 8,
      name: 'Arclox 500mg',
      type: 'Wound Pain Relief',
      price: 11.99,
      description: 'Used to treat high blood pressure and heart failure.',
      imageUrl: '/med9.jpg',
      rating: 4.6,
    },
  ];

  // Function to display stars based on the rating
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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Medicine Shop</h1>

      {/* View mode toggler */}
      <div className="flex items-center justify-between mb-6 space-x-4">
        <p>Showing 01 - 12 of 139 Results</p>
        <div className='flex gap-1'>
        <button
          className={`p-1 ${viewMode === 'grid' ? 'text-blue-600' : 'text-black'} rounded`}
          onClick={() => setViewMode('grid')}
        >
          <TableCellsMerge/>
        </button>
        <button
          className={`p-1 ${viewMode === 'list' ? 'text-blue-600' : 'text-black'} rounded`}
          onClick={() => setViewMode('list')}
        >
          <List/>
        </button>
        </div>
      </div>

      {/* Medicines Grid/List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
        {medicines.map((medicine) => (
          <div
            key={medicine.id}
            className={`border p-4 rounded shadow-lg relative group ${
              viewMode === 'list' ? 'flex space-x-4' : ''
            }`}
          >
            {/* Medicine Image with hover icons */}
            <div className={viewMode === 'list' ? 'w-1/3' : 'relative'}>
              <Image width="500" height="500" src={medicine.imageUrl} alt={medicine.name} className="w-full h-44 mb-4" />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-3 transition-opacity duration-300">
                <div className='bg-white p-1 rounded-sm'>
                <FaEye className="text-black text-xl cursor-pointer" />
                </div>
                <div className='bg-white p-1 rounded-sm'>
                <FaHeart className="text-black text-xl cursor-pointer" />
                </div>
                <div className='bg-white p-1 rounded-sm'>
                <FaShoppingCart className="text-black text-xl cursor-pointer" />
                </div>
                <div className='bg-white p-1 rounded-sm'>
                <FaRetweet className="text-black text-xl cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Medicine Details */}
            <div className={viewMode === 'list' ? 'w-2/3' : ''}>
              <h2 className="text-lg font-bold">{medicine.name}</h2>
              <p className="text-sm text-gray-600">{medicine.type}</p>
              <p className="mt-1 text-gray-700">{medicine.description}</p>

              {/* Price and Rating */}
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xl font-semibold">${medicine.price.toFixed(2)}</p>
                <div className="flex">{renderStars(medicine.rating)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCom;
