'use client';

import React, { useState } from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import { PlusCircle } from 'lucide-react'; // Plus icon from lucide-react
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const galleryItems = [
  {
    imageUrl: '/doc.jpg',
  },
  {
    imageUrl: '/doc1.jpg',
  },
  {
    imageUrl: '/doc2.jpg',
  },
  {
    imageUrl: '/doc3.jpg',
  },
  {
    imageUrl: '/doc4.jpg',
  },
  {
    imageUrl: '/doc5.jpg',
  },
  {
    imageUrl: '/doc6.jpg',
  },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCarousel = () => {
    setIsOpen(false);
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentIndex(index),
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl text-center font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Plus Icon Overlay */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <PlusCircle
                className="text-white text-4xl hover:text-yellow-400"
                onClick={() => openCarousel(index)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Component */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            <button
              onClick={closeCarousel}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times; {/* Close button */}
            </button>
            <Slider {...settings}>
              {galleryItems.map((item, index) => (
                <img
                  key={index}
                  src={item.imageUrl}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-auto rounded-lg px-4"
                />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
