'use client'
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Jason Kovalsky",
    specialization: "Cardiologist",
    phone: "658 222 127 964",
    email: "admin@gmail.com",
    image: "/hp2.jpg",
    backgroundColor: "#37c9dd", // Background color for this card
  },
  {
    id: 2,
    name: "Dr. Sarah Connors",
    specialization: "Dermatologist",
    phone: "658 222 127 123",
    email: "dermatology@gmail.com",
    image: "/hp3.jpg",
    backgroundColor: "#3fa5eb", // Another background color
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    specialization: "Pediatrist",
    phone: "658 222 127 123",
    email: "pediatrist@gmail.com",
    image: "/hp4.jpg",
    backgroundColor: "#0383cd", // Background color for this card
  },
  {
    id: 4,
    name: "Dr. John Smith",
    specialization: "Throat Specialist",
    phone: "658 222 127 123",
    email: "throat@gmail.com",
    image: "/hp5.jpg",
    backgroundColor: "#3156A3", // Different background color
  },
];

const ProfDoctor = () => {
  const [activeCard, setActiveCard] = useState(null); // To track the active card

  const handleMouseEnter = (cardId) => {
    setActiveCard(cardId); // Set active card on hover
  };

  return (
    <div className="pb-14 px-6 md:px-12 lg:px-24 pt-2 md:pt-16 bg-[#f5f9ff]">
      <p className="text-2xl md:text-3xl text-center">Meet Our</p>
      <h1 className="text-3xl md:text-5xl font-semibold text-center mt-3 mb-10 md:mb-14">
      Swasthya Professional Doctors
      </h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`${
                activeCard === doctor.id ? "shadow-md" : ""
              } hover:shadow-md transition-shadow duration-300`}
              onMouseEnter={() => handleMouseEnter(doctor.id)}
            >
              <div className="w-full h-[220px] overflow-hidden relative">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width="300"
                  height="400"
                  className="w-full h-full object-cover transition-transform duration-300 ease-linear hover:scale-110 absolute"
                />
              </div>

              {/* Dynamic Background Color */}
              <div
                className="py-6 md:py-10"
                style={{ backgroundColor: doctor.backgroundColor }}
              >
                <h1 className="text-white text-lg md:text-xl font-semibold ml-5">
                  {doctor.name}
                </h1>
                <p className="text-white ml-5">{doctor.specialization}</p>
              </div>

              <div className="py-6 md:py-8 bg-white">
                <p className="ml-5 text-sm md:text-base">
                  Phone : <span className="text-gray-500">{doctor.phone}</span>
                </p>
                <p className="ml-5 text-sm md:text-base">
                  Email : <span className="text-gray-500">{doctor.email}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button className="bg-[#0071ef] text-white px-6 md:px-8 gap-2 rounded-sm text-sm md:text-md py-4 md:py-6 mt-10">
            View All Doctors <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfDoctor;
