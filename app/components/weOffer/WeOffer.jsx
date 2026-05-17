"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getSpecializations } from "../../services/contentService";

const fallbackData = [
  {
    _id: "1",
    title: "Medical Treatment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate optio animi?",
    icon: "/1 (1).png",
    link: "#",
  },
  {
    _id: "2",
    title: "Emergency Help",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate optio animi?",
    icon: "/2 (2).png",
    link: "#",
  },
  {
    _id: "3",
    title: "Medical Professionals",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate optio animi?",
    icon: "/3 (1).png",
    link: "#",
  },
  {
    _id: "4",
    title: "Qualified Doctors",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate optio animi?",
    icon: "/4 (1).png",
    link: "#",
  },
];

const WeOffer = () => {
  const [specializations, setSpecializations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getSpecializations();
        if (data && data.length > 0) {
          setSpecializations(data);
        } else {
          setSpecializations(fallbackData);
        }
      } catch (err) {
        setSpecializations(fallbackData);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="bg-[#f5f9ff] px-6 md:px-16 lg:px-28 md:pb-12">
      <div className="pt-16 md:pt-28">
        <p className="text-center text-2xl md:text-3xl">We Offer Specialized</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 pb-12 md:pb-16">
          Orthopedics To Meet Your Needs
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex justify-center items-center px-3">
                <div className="w-full h-72 bg-gray-200 animate-pulse rounded-lg shadow-lg" />
              </div>
            ))
          : specializations.map((item) => (
              <div key={item._id} className="flex justify-center items-center px-3">
                <div className="px-6 py-8 bg-white shadow-lg w-full rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
                  <div>
                    <Image src={item.icon || "/1 (1).png"} alt={item.title} width={60} height={60} className="object-contain" />
                    <h1 className="text-lg md:text-xl font-bold mt-8">{item.title}</h1>
                    <p className="my-4 text-sm md:text-base text-gray-600 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href={`/servicedetail/${item.title || 'general'}`}
                    className="bg-white inline-block mt-4 text-sm md:text-md hover:bg-white text-black font-bold hover:text-blue-600 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default WeOffer;
