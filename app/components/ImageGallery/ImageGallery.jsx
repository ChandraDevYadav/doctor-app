'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const ImageGallery = () => {
  // List of images
  const images = [
    '/hp2.jpg',
    '/hp3.jpg',
    '/hp4.jpg',
    '/hp5.jpg', // Add your image paths here
  ];

  // Set the first image as the default main image
  const [mainImage, setMainImage] = useState(images[0]);

  // Function to handle image click
  const handleImageClick = (image) => {
    setMainImage(image); // Update the main image when a thumbnail is clicked
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 my-2 md:my-12 gap-6">
      {/* Main Image and Thumbnails */}
      <div className="col-span-4 md:ml-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 mt-8">
          {/* Main Image */}
          <div className="w-full md:w-2/3 mb-4 md:mb-0 border rounded-lg">
            {/* <img
              src={mainImage}
              alt="Main"
              className="w-full h-[300px] md:h-[500px] object-cover rounded-md shadow-lg p-4"
            /> */}
            <Image src={mainImage} width='500' height='500' className='object-cover w-full'/>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-x-4 md:gap-x-4 pl-20 md:pl-0 gap-y-0 md:gap-y-4 w-full md:w-[20%]">
            {images.slice(1).map((image, index) => (
              <Image
                key={index}
                src={image}
                width='500'
                height='500'
                alt={`Thumbnail ${index}`}
                className={`h-[75px] md:h-[150px] object-cover rounded-md cursor-pointer transition-transform duration-200 transform hover:scale-105 ${
                  mainImage === image ? 'border-2 md:border-4 border-blue-500' : ''
                }`}
                onClick={() => handleImageClick(image)}
              />
              
            ))}
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="col-span-2 px-4 md:px-0">
      </div>
    </div>
  );
};

export default ImageGallery;
